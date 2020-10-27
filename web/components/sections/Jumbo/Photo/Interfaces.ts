// Interfaces
import { IMediaQueries } from '../../../../interfaces/IMediaQueries'

export interface IProps {
    bgImage: string | BgImageOrImageSrcOrLogoSrcOrOpenGraphImage
    className?: string
    headingTitle?: string
    headingSubTitle?: string
    mediaQueries: IMediaQueries
    isVisible?: boolean
}
export interface BgImageOrImageSrcOrLogoSrcOrOpenGraphImage {
  _type: string;
  asset: PageOrFrontpageOrAsset;
}
export interface PageOrFrontpageOrAsset {
  _ref: string;
  _type: string;
}