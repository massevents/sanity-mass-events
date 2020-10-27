
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