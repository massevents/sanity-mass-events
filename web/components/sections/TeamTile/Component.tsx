// Base
import React from "react";
import client from "../../../client";

// Components
import { Heading } from "../../shared/Heading/Component";

// Enums
import * as HeadingEnum from "../../shared/Heading/Enums";

// Style
import * as Styled from "./Style";
// Sanity
import imageUrlBuilder from "@sanity/image-url";

export interface IProps {
  _ref: string;
}
export interface Member {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  bio?: string;
  email?: string;
  image?: ImageOrOpenGraphImage;
  name: string;
  roles: string;
  slug?: Slug;
  index?: number;
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
export const TeamTile = (props:IProps) => {
  
  const [member, setMember] = React.useState<Member>({ name: 'Loading', roles: 'Loading'});
  const [mediaUrl, setMediaUrl] = React.useState<string>(""); 

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  React.useEffect(() => {
    if (member.name === 'Loading') {
      client
      .fetch(`*[_type == "teammember" && _id == "${props._ref}"]{...}`)
      .then((response:any) => {        
        const [dataToSave] = response;
        setMember(dataToSave);
        const res = urlFor(dataToSave && dataToSave.image).height(320).url();
        setMediaUrl( res ? res : '');
      });
    }
  }, [member, urlFor]);

  return(
  <Styled.Section>
    <Styled.TeamImage>
      <img src={mediaUrl!} />
    </Styled.TeamImage>
    <Heading color={HeadingEnum.Color.primary} tag={HeadingEnum.Tag.h5}>
      {member && member.name}
    </Heading>
    <p>{member && member.roles}</p>
  </Styled.Section>
)
  }
