import React from "react";
import Head from "next/head";
import NextSeo from "next-seo";

import imageUrlBuilder from "@sanity/image-url";

import { Meta } from "./global/meta";

import client from "../client";

import JumboVideo from "./sections/Jumbo/Video/Component";
import { JumboPhoto } from "./sections/Jumbo/Photo/Component";
import Header from "./sections/Header/Component";
import { IMediaQueries } from "../interfaces/IMediaQueries";

import { SectionDefault } from "./shared/SectionDefault/Component";
import { ProjectContent } from "./shared/ProjectContent/Component";
import { SocialMedia } from "./shared/SocialMedia/Component";
import { FooterDefault } from "./shared/Footer/Component";

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
  children?: ChildrenEntity[] | null;
  mediaQueries: IMediaQueries;
  activities?: Activities;
  description?: Description;
  disallowRobots?: boolean;
  includeInSitemap?: boolean;
  media?: Media;
  seo?: Seo;
  slug: Slug;
  socialMedia?: SocialMedia;
  sponsors?: Sponsors;
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
export interface Activities {
  activities?: string[] | null;
  titleActivities: string;
}
export interface Description {
  massEvents?: MassEventsEntityOrShortDescriptionEntity[] | null;
  massEventsTitle: string;
  shortDescription?: MassEventsEntityOrShortDescriptionEntity[] | null;
  shortDescriptionTitle: string;
  customHtml?: any;
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
  projectHeader: ProjectHeader;
  projectType: string;
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
export interface ProjectHeader {
  bgImage: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  videoId: string;
}
export interface Seo {
  openGraphImage: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  description: string;
}
export interface SocialMedia {
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  websiteUrl: string;
}
export interface Sponsors {
  partners?: PartnersEntity[] | null;
  titleSponsors: string;
}
export interface PartnersEntity {
  _key: string;
  _type: string;
  sponsors?: string[] | null;
  type: string;
}

const ProjectLayout = (props: IPropsBefore) => {
  const { config, children, mediaQueries } = props;

  const [project, setProject] = React.useState<IProps>({
    title: "Loading",
    subTitle: "Loading",
    ...props,
  });

  React.useEffect(() => {
    if (project.title === "Loading") {
      client
        .fetch(`*[_type == "project" && slug.current == "${props.slug.current}"]{...}`)
        .then((response: any) => {
          const [dataToSave] = response;
          setProject(dataToSave);
        });
    }
  }, [project]);

  const builder = imageUrlBuilder(client);

  const openGraphImages =
    project.seo && project.seo.openGraphImage
      ? [
          {
            url: builder.image(project.seo.openGraphImage).width(800).height(600).url() || "",
            width: 800,
            height: 600,
            alt: config.title,
          },
          {
            // Facebook recommended size
            url: builder.image(project.seo.openGraphImage).width(1200).height(630).url() || "",
            width: 1200,
            height: 630,
            alt: config.title,
          },
          {
            // Square 1:1
            url: builder.image(project.seo.openGraphImage).width(600).height(600).url() || "",
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
    project.media &&
    project.media.projectHeader &&
    urlFor(project.media.projectHeader.bgImage).width(1024).url();

  const socialMedia = {
    facebook: project.socialMedia ? project.socialMedia.facebookUrl : "",
    linkedin: project.socialMedia ? project.socialMedia.linkedinUrl : "",
    instagram: project.socialMedia ? project.socialMedia.instagramUrl : "",
    website: project.socialMedia ? project.socialMedia.websiteUrl : "",
  };

  return (
    <>
      <Head>
        <Meta />
      </Head>

      <NextSeo
        config={{
          title: config ? config.title : "",
          titleTemplate: project ? `${project.title} | %s` : "",
          description: project.seo && project.seo.description,
          canonical: config && config.url && `${config.url}/${project.slug}`,
          openGraph: {
            images: openGraphImages,
          },
          noindex: project.disallowRobots,
        }}
      />

      <Header config={config} type="white" isAbsolute mediaQueries={mediaQueries} />

      {project.title !== "Loading" && project.media && project.media.projectType === "video" && (
        <JumboVideo
          mediaQueries={mediaQueries}
          headingTitle={project.title}
          headingSubTitle={project.subTitle}
          videoId={project.media.projectHeader.videoId}
        />
      )}
      {project.title !== "Loading" && project.media && project.media.projectType === "photo" && (
        <JumboPhoto
          mediaQueries={mediaQueries}
          headingTitle={project.title}
          headingSubTitle={project.subTitle}
          bgImage={bgImageSrc!}
        />
      )}

      {project.title !== "Loading" && (
        <SectionDefault>
          <SocialMedia urls={socialMedia} />
          {project.description && <ProjectContent {...project} />}
          <SocialMedia urls={socialMedia} />
        </SectionDefault>
      )}

      <>{children}</>

      <FooterDefault />
    </>
  );
};

export default ProjectLayout;
