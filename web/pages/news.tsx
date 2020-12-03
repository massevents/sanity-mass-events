import React from 'react'
import NewsLayout from '../components/NewsLayout'
import client from '../client'

export interface PageOrFrontpageOrAsset {
  _ref: string;
  _type: string;
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


const IndexPage = (props: any) => {
  return (
  <NewsLayout slug={props.slug} config={props.config} mediaQueries={props.mediaQueries} /> )
} 

IndexPage.getInitialProps = async function(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query

  return await client.fetch(`
    *[_type == "news" && slug.current == $slug][0] {
      ...,
      author->
    }
  `, { slug })
}

export default IndexPage
