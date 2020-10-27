// Interfaces
import { IMediaQueries } from '../../../interfaces/IMediaQueries'

export interface IProps {
  mediaQueries?: IMediaQueries
  slug: Slug
  title: string
  label: string
  leftContent: string
  rightContent?: string
}



export interface Slug {
  _type: string;
  current: string;
}