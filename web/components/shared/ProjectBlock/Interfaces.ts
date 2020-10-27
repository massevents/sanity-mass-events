import { ImagePosition } from './Enums'
import { IMediaQueries } from '../../../interfaces/IMediaQueries'

export interface IProps {
  imagePosition: ImagePosition
  data?: IData
  mediaQueries?: IMediaQueries
}
  
interface IData {
  media?: { imageSrc: string; logoSrc: string };
  title: string;
  subTitle: string;
  slug?: { current: string; };
}



// export interface IProject {
//   meta: IMeta
//   description: IDesc
//   media: IMedia
//   partners?: IPartnerGroup[]
//   urls: IUrl[]  
//   activities?: string[]
// }

// interface IPartnerGroup {
//   type: string
//   sponsors: string[]
// }

// interface IMeta {
//   slug: string
//   title: string
//   subTitle: string
//   titleSponsors?: string
// }

// interface IDesc {
//   shortDescription: string
//   massEvents?: string
//   event?: string
//   customHtml?: string
// }

// interface IMedia {
//   logoSrc: string
//   imageSrc: string
//   images: string[]
// }

// interface IUrl {
//   type: UrlType.Type
//   url: string
// }
