// Base
import React from "react";
import Link from "next/link";
import client from "../../../client";

// Interfaces
import { IProps } from "./Interfaces";

// Style
import * as Styled from "./Style";

export const NavDefault: React.FC<IProps> = ({ color, data, router }) => {
  const [navData, setNavData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  async function fetchSpecificData() {
    data &&
      (await data.map(async (item: any, index: number) => {

        if (item.internalLink) {
          await client
            .fetch(`*[_type == "route" && _id == "${item.internalLink._ref}"]{...}`)
            .then((response: any) => {
              const [dataToReplace] = response;

              dataToReplace.title = item.arrayTitle;
              dataToReplace.index = index;

              setNavData((arr) => [...arr, dataToReplace]);
            });
        } else if (item.externalLink) {
          setNavData((arr) => [
            ...arr,
            {
              index: index,
              _id: index,
              type: "external",
              slug: item.externalLink.url,
              title: item.externalLink.label,
            },
          ]);
        }
      }));
  }

  React.useEffect(() => {
    navData && navData.length === 0 && fetchSpecificData();
  }, []);

  React.useEffect(() => {

    let copy = navData;
    copy.sort(function(a, b) {
      return a.index - b.index;
    });
    copy !== navData && setNavData(copy);
    copy === navData && navData.length === data!.length && setLoading(false)
  }, [navData])

  return !loading ? (
    <Styled.Nav color={color}>
      <ul>
        {navData &&
          navData.map((item) => {
            const { slug, title, _id, type } = item;
            let isActive = false;

            switch (router.pathname) {
              case "/LandingPage":
                isActive = router.query.slug === slug.current;
                break;
              case "/project":
                isActive = slug.current === "projecten";
                break;
              default:
                isActive = false;
                break;
            }


            return type !== "external" ? (
              <li key={_id}>
                <Link
                  href={{
                    pathname: "/LandingPage",
                    query: { slug: slug.current },
                  }}
                  as={`/${slug.current != "/" ? slug.current : ``}`}
                  prefetch
                >
                  <a title={`Bezoek ${slug}`} className={isActive ? "isActive" : ""}>
                    {title}
                  </a>
                </Link>
              </li>
            ) : (
              <li key={_id}>
                  <a
                    title={`Bezoek ${title}`}
                    className={isActive ? "isActive" : ""}
                    target="_blank"
                    href={slug}
                  >
                    {title}
                  </a>
              </li>
            );
          })}
      </ul>
    </Styled.Nav>
  
  ) : (<p>Loading</p>);
};
