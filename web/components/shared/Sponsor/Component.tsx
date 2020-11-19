// Base
import React from "react";
import client from "../../../client";

// Style
import * as Styled from "./Style";
// Sanity
import imageUrlBuilder from "@sanity/image-url";

export interface IProps {
  _ref: string;
  sponsorType?: string;
  className?: string;

}
export interface Sponsor {
  _createdAt?: string;
  _id?: string;
  _ref?: string;
  _type?: string;
  _updatedAt?: string;
  url?: string;
  logoSrc?: ImageOrOpenGraphImage;
  title: string;
  slug?: Slug;
}
export interface ImageOrOpenGraphImage {
  _type: string;
  asset: PageOrFrontpageOrAsset;
}

export interface PageOrFrontpageOrAsset {
  _ref: string;
  _type: string;
}

export interface Slug {
  _type: string;
  current: string;
}
export const Sponsor = (props: IProps) => {
  const [sponsor, setSponsor] = React.useState<Sponsor>({ title: "Loading" });
  const [mediaUrl, setMediaUrl] = React.useState<string>("");

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  React.useEffect(() => {
    console.log(sponsor);
    if (sponsor.title === "Loading") {
      client.fetch(`*[_type == "sponsor" && _id == "${props._ref}"]{...}`).then((response: any) => {
        const [dataToSave] = response;
        setSponsor(dataToSave);
        const res = urlFor(dataToSave && dataToSave.logoSrc)
          .height(320)
          .url();
        setMediaUrl(res ? res : "");
      });
    }
  }, [sponsor, urlFor]);

  return props.sponsorType === "photo" ? (
      <li className={props.className}>
        <Styled.Section>
          <a href={sponsor.url} title={sponsor.title} target="_blank">
            <img src={mediaUrl!} alt={sponsor.title} />
          </a>
        </Styled.Section>
      </li>
    ) : (
      <li className={props.className}>
            <a href={sponsor.url} title={sponsor.title} target="_blank">
        <Styled.Section>
            {sponsor.title}
        </Styled.Section>
          </a>
      </li>
    );
  }

