import React from "react";
import Head from "next/head";

import { Meta } from "./global/meta";

import { IMediaQueries } from "../interfaces/IMediaQueries";

import { FooterDefault } from "./shared/Footer/Component";

export interface IConfig {
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  frontpage: AssetOrPageOrFrontpage;
  lang: string;
  mainNavigation?: (MainNavigationEntity)[] | null;
  title: string;
  url: string;
}

export interface AssetOrPageOrFrontpage {
  _ref: string;
  _type: string;
}

interface IProps {
  config: IConfig;
  mediaQueries: IMediaQueries;
  children: any;
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
  page: AssetOrPageOrFrontpage;
  slug: Slug;
  title: string;
}


export interface Slug {
  _type: string;
  current: string;
}
const Layout = (props: IProps) => {
  const { config, children, mediaQueries } = props;
  const sections = children[1].props.sections;

  sections &&
    sections.forEach(function (child: any) {
      child = Object.assign(child, { config, mediaQueries });
    });

  return (
    <>
      <Head>
        <Meta />
      </Head>
      <div className="container">
        <div className="content">{children}</div>

        <FooterDefault />
      </div>
    </>
  );
};

export default Layout;
