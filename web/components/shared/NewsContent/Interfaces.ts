
import { IMediaQueries } from "../../../interfaces/IMediaQueries";

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
  sponsorObjects?: any;
  subTitle: string;
  title: string;
}
export interface IConfig {
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
export interface Activities {
  activities?: (string)[] | null;
  titleActivities: string;
}
export interface Description {
  massEvents?: (MassEventsEntityOrShortDescriptionEntity)[] | null;
  massEventsTitle: string;
  shortDescription?: (MassEventsEntityOrShortDescriptionEntity)[] | null;
  shortDescriptionTitle: string;
  customHtml?: any;

}
export interface MassEventsEntityOrShortDescriptionEntity {
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
  partners?: (PartnersEntity)[] | null;
  titleSponsors: string;
}
export interface PartnersEntity {
  _key: string;
  _type: string;
  sponsors?: (string)[] | null;
  type: string;
}