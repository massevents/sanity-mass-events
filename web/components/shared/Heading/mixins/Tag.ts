// Base
import { css, FlattenSimpleInterpolation } from 'styled-components'

// Props
import { IProps } from '../Interfaces'

// Enums
import * as HeadingEnum from '../Enums'

export const MixinTag = ({ tag }: IProps): FlattenSimpleInterpolation => {
  switch (tag) {
    case HeadingEnum.Tag.h1:
      return css`
        font-size: 7.059em;
        line-height: 0.84;
        text-transform: uppercase;
      `

    case HeadingEnum.Tag.h2:
      return css`
        font-size: 5.294em;
        line-height: 1.06;
      `

    case HeadingEnum.Tag.h3:
      return css`
        font-size: 3.235em;
        line-height: 1.1;
      `

    case HeadingEnum.Tag.h4:
      return css`
        font-size: 2.059em;
        line-height: 1.15;
      `

    case HeadingEnum.Tag.h5:
      return css`
        font-size: 1.471em;
        line-height: 1.2;
      `

    case HeadingEnum.Tag.h6:
    default:
      return css`
        font-size: 1.176em;
        line-height: 1;
        text-transform: uppercase;
      `
  }
}
