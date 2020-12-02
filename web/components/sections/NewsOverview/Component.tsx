// Base
import React from "react";
import client from "../../../client";

// Components
import { NewsBlock } from "../../shared/NewsBlock/Component";

import { Title } from "../../shared/Title/Component";
import { ButtonDefault } from "../../shared/Button/Component";
// import { NewsSquares } from '@components/organisms/NewsSquares'

// Enums
import { ImagePosition } from "../../shared/NewsBlock/Enums";
import * as ColorEnum from "../../../enums/Color";

// Interfaces
import { IProps } from "./Interfaces";

// Style
import * as Styled from "./Style";

const NewsOverview = (props: IProps) => {
  const { button_enable, type, mediaQueries, headingTitle, headingSubTitle, format } = props;

  const [newsData, setNewssData] = React.useState<any>(null);
  const [pageUrl, setPageUrl] = React.useState<any>(null);

  async function fetchData(type: any) {
    const result = await client.fetch(`*[_type == "news"]|order(publishedAt desc)`);
    type === "recent" ? setNewssData(result.slice(0, 4)) : setNewssData(result);
  }

  async function fetchSpecificData() {
    let data: any[] = [];
    type.news &&
      type.news.map((item: any) => {
        if (item._ref) {
          client.fetch(`*[_type == "news" && _id == "${item._ref}"]{...}`).then((response: any) => {
            const [dataToReplace] = response;
            data.push(dataToReplace);

            if (data.length === type.news.length) {
              setNewssData(data);
            }
          });
        }
      });
  }

  React.useEffect(() => {
    if (type.condition === "all" || type.condition === "recent") {
      newsData === null && fetchData(type.condition);
    }
    if (type.condition === "news") {
      newsData === null && fetchSpecificData();
    }
  }, [type.news]);

  React.useEffect(() => {
    if (
      button_enable &&
      button_enable.condition !== "button_object_no" &&
      button_enable.button_object &&
      button_enable.button_object.button_url
    ) {
      if (pageUrl === null) {
        client
          .fetch(
            `*[_type == "route" && _id == "${button_enable.button_object.button_url._ref}"]{...}`
          )
          .then((response: any) => {
            const [dataToSave] = response;
            setPageUrl(dataToSave);
          });
      }
    }
  }, [pageUrl, button_enable]);

  return (
    <Styled.Section>
      <Title heading={headingTitle} subheading={headingSubTitle} />
      <div>
        {type && type.news && type.news.length === 0 && <p>Geen nieuws tot dusver!</p>}

        {newsData &&
          newsData.map((item: any, index: number) => {
            return (
              <NewsBlock
                imagePosition={ImagePosition.left}
                key={`news-${index}`}
                data={item}
                mediaQueries={mediaQueries}
              />
            );
          })}
      </div>

      {pageUrl && (
        <Styled.ButtonContainer>
          <ButtonDefault
            href={`/${pageUrl && pageUrl.slug.current}`}
            color={ColorEnum.Color.primary}
          >
            {button_enable.button_object.button_label}
          </ButtonDefault>
        </Styled.ButtonContainer>
      )}
    </Styled.Section>
  );
};

export default NewsOverview;
