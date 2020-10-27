// Base
import React from "react";
import { withRouter, NextRouter } from "next/router";
import { IMediaQueries } from '../../../interfaces/IMediaQueries'
const BlockContent = require("@sanity/block-content-to-react");
// Components
import { Title } from "../../shared/Title/Component";
import { SectionDefault } from '../../shared/SectionDefault/Component'

// Enums
import * as TitleEnum from "../../shared/Title/Enums";

// Style
import * as Styled from "./Style";

export interface IProps {
  router: NextRouter;
  _key: string;
  _type: string;
  content_bottom?: (LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity)[] | null;
  content_top_left?: (LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity)[] | null;
  content_top_right?: (LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity)[] | null;
  heading_bottom: string;
  heading_top_left: string;
  heading_top_right: string;
  label_bottom: string;
  label_top_left: string;
  label_top_right: string;
  config: Config;
  mediaQueries: IMediaQueries;
}

export interface ContentEntity {
  _key: string;
  _type: string;
  isAbsolute?: boolean | null;
  type?: string | null;
  config: Config;
  mediaQueries: IMediaQueries;
  heading?: string | null;
  label?: string | null;
  left_col_text?: (LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity)[] | null;
  quote?: string | null;
  right_col_text?: (RightColTextEntity)[] | null;
  people?: (PeopleEntity)[] | null;
  content_bottom?: (LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity)[] | null;
  content_top_left?: (LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity)[] | null;
  content_top_right?: (LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity)[] | null;
  heading_bottom?: string | null;
  heading_top_left?: string | null;
  heading_top_right?: string | null;
  label_bottom?: string | null;
  label_top_left?: string | null;
  label_top_right?: string | null;
}
export interface Config {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  frontpage: PageOrFrontpageOrAsset;
  lang: string;
  mainNavigation?: (MainNavigationEntity)[] | null;
  title: string;
  url: string;
}
export interface PageOrFrontpageOrAsset {
  _ref: string;
  _type: string;
}
export interface MainNavigationEntity {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  index?: number;
  type?: string;
  disallowRobots?: boolean | null;
  includeInSitemap?: boolean | null;
  page: PageOrFrontpageOrAsset;
  slug: Slug;
  title: string;
}
export interface Slug {
  _type: string;
  current: string;
}
export interface LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity {
  _key: string;
  _type: string;
  children?: (ChildrenEntity)[] | null;
  markDefs?: (null)[] | null;
  style: string;
}
export interface ChildrenEntity {
  _key: string;
  _type: string;
  marks?: (null)[] | null;
  text: string;
}
export interface RightColTextEntity {
  _key: string;
  _type: string;
  children?: (ChildrenEntity1)[] | null;
  markDefs?: (null)[] | null;
  style: string;
}
export interface ChildrenEntity1 {
  _key: string;
  _type: string;
  marks?: (string | null)[] | null;
  text: string;
}
export interface PeopleEntity {
  _key: string;
  _ref: string;
  _type: string;
  member: Member;
}
export interface Member {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  bio: string;
  email: string;
  image: ImageOrOpenGraphImage;
  name: string;
  roles: string;
  slug: Slug;
}
export interface ImageOrOpenGraphImage {
  _type: string;
  asset: PageOrFrontpageOrAsset;
}


const WorkTogether = (props: IProps) => {
  const serializers = {
    types: {
      code: (props:any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };


  return (
    <SectionDefault>
      <Styled.Container>
        <Styled.Section>
          <Title
            size={TitleEnum.Size.small}
            heading={props.heading_top_left}
            subheading={props.label_top_left}
          />
          <BlockContent blocks={props.content_top_left} serializers={serializers} />
        </Styled.Section>
        <Styled.Section>
          <Title
            size={TitleEnum.Size.small}
            heading={props.heading_top_right}
            subheading={props.label_top_right}
          />
          <BlockContent blocks={props.content_top_right} serializers={serializers} />
        </Styled.Section>
      </Styled.Container>
      <Styled.FullContainer>
        <Styled.Section>
          <Title
            size={TitleEnum.Size.small}
            heading={props.heading_bottom}
            subheading={props.label_bottom}
          />
          <BlockContent blocks={props.content_bottom} serializers={serializers} />
        </Styled.Section>
      </Styled.FullContainer>
    </SectionDefault>
  );
};
export default withRouter(WorkTogether);
