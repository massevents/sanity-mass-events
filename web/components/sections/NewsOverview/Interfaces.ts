import { IMediaQueries } from '../../../interfaces/IMediaQueries'
export interface IProps {
    _key: string;
    _type: string;
    headingSubTitle: string;
    headingTitle: string;
    overviewUrl: any;
    projects: ProjectsEntity[];
    type: any;
    config: Config;
    mediaQueries: IMediaQueries;
    button_enable: any;
  }
  export interface ProjectsEntity {
    _key: string;
    _ref: string;
    _type: string;
  }
  export interface Config {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    frontpage: PageOrFrontpage;
    lang: string;
    mainNavigation?: (MainNavigationEntity)[] | null;
    title: string;
    url: string;
  }
  export interface PageOrFrontpage {
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
    page: PageOrFrontpage;
    slug: Slug;
    title: string;
  }
  export interface Slug {
    _type: string;
    current: string;
  }