// Base
import React from "react";
import Carousel from "nuka-carousel";
import { withRouter, NextRouter } from "next/router";
import { IMediaQueries } from "../../../interfaces/IMediaQueries";

import { TeamTile } from "../TeamTile/Component";
// Components
import { SwipeIcon } from "../../shared/SwipeIcon/Component";
import { Team } from "../Team/Component";

// Style
import * as Styled from "./Style";

export interface IProps {
  router: NextRouter;
  _key: string;
  _type: string;
  people?: PeopleEntity[] | null;
  config: Config;
  mediaQueries: IMediaQueries;
}
export interface Props {
  pageProps: PageProps;
}
export interface PageProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  content?: ContentEntity[] | null;
  description: string;
  openGraphImage: ImageOrOpenGraphImage;
  title: string;
  slug: string;
  config: Config;
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
  left_col_text?:
    | LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity[]
    | null;
  quote?: string | null;
  right_col_text?: RightColTextEntity[] | null;
  people?: PeopleEntity[] | null;
  content_bottom?:
    | LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity[]
    | null;
  content_top_left?:
    | LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity[]
    | null;
  content_top_right?:
    | LeftColTextEntityOrContentBottomEntityOrContentTopLeftEntityOrContentTopRightEntity[]
    | null;
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
  mainNavigation?: MainNavigationEntity[] | null;
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
  children?: ChildrenEntity[] | null;
  markDefs?: null[] | null;
  style: string;
}
export interface ChildrenEntity {
  _key: string;
  _type: string;
  marks?: null[] | null;
  text: string;
}
export interface RightColTextEntity {
  _key: string;
  _type: string;
  children?: ChildrenEntity1[] | null;
  markDefs?: null[] | null;
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

const TeamCarousel = (props: IProps) => {
  return (
    <>
      <Team {...props} />

      <Styled.Container>
        <Carousel
          cellSpacing={20}
          frameOverflow="none"
          initialSlideHeight={406}
          initialSlideWidth={300}
          slidesToScroll={1}
          slidesToShow={1.25}
          slideWidth={1}
          heightMode="max"
          swiping={true}
          withoutControls={true}
        >
          {props.people &&
            props.people.length > 0 &&
            props.people.map((item, index) => {
              return <TeamTile _ref={item._ref} key={`team-member-carousel-${index}`} />;
            })}
        </Carousel>
        <Styled.Section>
          <SwipeIcon />
        </Styled.Section>
      </Styled.Container>
    </>
  );
};

export default withRouter(TeamCarousel);
