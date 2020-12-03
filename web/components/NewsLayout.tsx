import React from "react";
import Head from "next/head";
import NextSeo from "next-seo";

import imageUrlBuilder from "@sanity/image-url";

import { Meta } from "./global/meta";

import client from "../client";

import { JumboPhoto } from "./sections/Jumbo/Photo/Component";
import Header from "./sections/Header/Component";
import { IMediaQueries } from "../interfaces/IMediaQueries";

import { SectionDefault } from "./shared/SectionDefault/Component";
import { NewsContent } from "./shared/NewsContent/Component";
import { FooterDefault } from "./shared/Footer/Component";

import RenderSections from "./RenderSections";

export interface IPropsBefore {
  config: IConfig;
  mediaQueries: IMediaQueries;
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  children?: ChildrenEntity[] | null;
  slug: Slug;
}

export interface IProps {
  config: IConfig;
  content?: any;
  children?: ChildrenEntity[] | null;
  mediaQueries: IMediaQueries;
  description?: MassEventsEntityOrShortDescriptionEntity[] | null;
  snippetDesc?: string;
  disallowRobots?: boolean;
  includeInSitemap?: boolean;
  media?: Media;
  seo?: Seo;
  slug: Slug;
  _updatedAt?: string;
  subTitle: string;
  title: string;
}
export interface IConfig {
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
export interface MassEventsEntityOrShortDescriptionEntity {
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
export interface Media {
  imageSrc: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  images?: any;
  logoSrc: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  newsHeader: NewsHeader;
  newsType: string;
}
export interface BgImageOrImageSrcOrLogoSrcOrOpenGraphImage {
  _type: string;
  asset: PageOrFrontpageOrAsset;
}
export interface ImagesEntity {
  _key: string;
  _type: string;
  asset: PageOrFrontpageOrAsset;
}
export interface NewsHeader {
  bgImage: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  videoId: string;
}
export interface Seo {
  openGraphImage: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  description: string;
}

const NewsLayout = (props: IPropsBefore) => {
  const { config, children, mediaQueries } = props;

  const [news, setNews] = React.useState<IProps>({
    title: "Loading",
    subTitle: "Loading",
    ...props,
  });

  React.useEffect(() => {
    if (news.title === "Loading") {
      client
        .fetch(`*[_type == "news" && slug.current == "${props.slug.current}"]{..., author-> }`)
        .then((response: any) => {
          const [dataToSave] = response;
          setNews(dataToSave);
        });
    }
  }, [news]);

  const builder = imageUrlBuilder(client);

  const openGraphImages =
    news.seo && news.seo.openGraphImage
      ? [
          {
            url: builder.image(news.seo.openGraphImage).width(800).height(600).url() || "",
            width: 800,
            height: 600,
            alt: config.title,
          },
          {
            // Facebook recommended size
            url: builder.image(news.seo.openGraphImage).width(1200).height(630).url() || "",
            width: 1200,
            height: 630,
            alt: config.title,
          },
          {
            // Square 1:1
            url: builder.image(news.seo.openGraphImage).width(600).height(600).url() || "",
            width: 600,
            height: 600,
            alt: config.title,
          },
        ]
      : [];

  function urlFor(source: any) {
    return builder.image(source);
  }

  const bgImageSrc =
    news.media && news.media.newsHeader && urlFor(news.media.newsHeader.bgImage).width(1024).url();


  return (
    <>
      <Head>
        <Meta />
      </Head>

      <NextSeo
        config={{
          title: config ? config.title : "",
          titleTemplate: news ? `${news.title} | %s` : "",
          description: news.seo && news.seo.description,
          canonical: config && config.url && `${config.url}/${news.slug}`,
          openGraph: {
            images: openGraphImages,
          },
          noindex: news.disallowRobots,
        }}
      />

      <Header config={config} type="white" isAbsolute mediaQueries={mediaQueries} />

      {news.title !== "Loading" && news.media && (
        <JumboPhoto
          mediaQueries={mediaQueries}
          headingTitle={news.title}
          headingSubTitle={news.subTitle}
          bgImage={bgImageSrc!}
        />
      )}

      {news.title !== "Loading" && (
        <>
          <SectionDefault>{news.description && <NewsContent {...news} />}</SectionDefault>
          {news.content && <RenderSections sections={news.content} />}

          { news._updatedAt && (<SectionDefault>
            <small>
              Laatst gewijzigd op{" "}
              {new Intl.DateTimeFormat("nl-NL", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(news._updatedAt))}
            </small>
          </SectionDefault>)}
        </>
      )}

      <>{children}</>

      <FooterDefault />
    </>
  );
};

export default NewsLayout;
