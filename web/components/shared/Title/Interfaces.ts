import React from 'react'
import * as TitleEnum from './Enums'
import * as HeadingEnum from '../Heading/Enums'

export interface IProps {
  color?: HeadingEnum.Color
  heading: string | React.ReactElement | (string | React.ReactElement)[]
  size?: TitleEnum.Size
  subheading?: string | React.ReactElement | (string | React.ReactElement)[]
}
