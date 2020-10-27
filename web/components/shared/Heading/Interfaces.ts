import { HTMLAttributes, ReactElement } from 'react'

import * as HeadingEnum from './Enums'

export interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: string | ReactElement | (string | ReactElement)[]
  color?: HeadingEnum.Color
  tag: HeadingEnum.Tag
}
