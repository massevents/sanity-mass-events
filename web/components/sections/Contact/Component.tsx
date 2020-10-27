// Base
import React from "react";
import { withRouter, NextRouter } from "next/router";

const BlockContent = require("@sanity/block-content-to-react");

// Components
import { BusinessCard } from "../../shared/BusinessCard/Component";
import { Title } from "../../shared/Title/Component";
import { ButtonDefault } from "../../shared/Button/Component";
import { SectionDefault } from "../../shared/SectionDefault/Component";
// Enums
import * as ColorEnum from "../../../enums/Color";

// Interfaces
import { IMediaQueries } from "../../../interfaces/IMediaQueries";

// Style
import * as Styled from "./Style";

export interface IProps {
  router: NextRouter;
  _key: string;
  _type: string;
  content?: ContentEntity[] | null;
  heading: string;
  label: string;
  people?: PeopleEntity[] | null;
  config: Config;
  mediaQueries: IMediaQueries;
}
export interface ContentEntity1 {
  _key: string;
  _type: string;
  isAbsolute?: boolean | null;
  type?: string | null;
  config: Config;
  mediaQueries: IMediaQueries;
  content?: ContentEntity[] | null;
  heading?: string | null;
  label?: string | null;
  people?: PeopleEntity[] | null;
  title?: string | null;
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
export interface ContentEntity {
  _key: string;
  _type: string;
  children?: ChildrenEntity[] | null;
  markDefs?: (MarkDefsEntity | null)[] | null;
  style: string;
}
export interface ChildrenEntity {
  _key: string;
  _type: string;
  marks?: (string | null)[] | null;
  text: string;
}
export interface MarkDefsEntity {
  _key: string;
  _type: string;
  href: string;
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

const ContactSection = (props: IProps) => {
  const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <SectionDefault>
      <Styled.Container>
        <Title heading={props.heading} subheading={props.label} />
      </Styled.Container>

      <Styled.Container>
        <Styled.Section>
          <BlockContent blocks={props.content} serializers={serializers} />

          <ButtonDefault href="mailto:info@massevents.nl" color={ColorEnum.Color.primary}>
            Verstuur bericht
          </ButtonDefault>
        </Styled.Section>
        <Styled.Section>
          {props.people &&
            props.people.map((item, index) => {
              return <BusinessCard key={`team-member-${index}`} _ref={item._ref} />;
            })}
        </Styled.Section>
      </Styled.Container>
    </SectionDefault>
  );
};

export default withRouter(ContactSection);
