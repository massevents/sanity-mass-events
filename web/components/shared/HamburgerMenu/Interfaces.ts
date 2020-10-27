import { NextRouter } from 'next/router';

export interface IProps {
  data?: (MainNavigationEntity)[] | null;
  router: NextRouter
}


export interface AssetOrPageOrFrontpage {
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
  page: AssetOrPageOrFrontpage;
  slug: Slug;
  title: string;

}
export interface Slug {
  _type: string;
  current: string;
}