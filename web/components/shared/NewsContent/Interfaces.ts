
import { IMediaQueries } from "../../../interfaces/IMediaQueries";

export interface IProps {
  author?: any;
  config: IConfig;
  children?: ChildrenEntity[] | null;
  mediaQueries: IMediaQueries;
  description?: (MassEventsEntityOrShortDescriptionEntity)[] | null;
  disallowRobots?: boolean;
  includeInSitemap?: boolean;
  media?: Media;
  seo?: Seo;
  slug: Slug;
  subTitle: string;
  title: string;
  _createdAt?: string;
  _updatedAt?: string;

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