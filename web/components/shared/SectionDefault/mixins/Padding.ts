// Base
import { css } from 'styled-components'
import { math } from 'polished'
import { Dimensions } from '../../../global/Theme'

// Props
import { IProps } from '../Interfaces'

// Enums
import * as SectionEnum from '../Enums'

export const MixinPadding = ({ padding }: IProps) => {
  switch (padding) {
    case SectionEnum.Padding.none:
      return css`
        padding: 0 calc(${math('((100 / 40) * 7)')}% - 1em);

        @media (max-width: ${Dimensions.dimensions.mediaQueries
            .isTabletPortrait}) {
          padding: 0 1em;
        }
      `

    case SectionEnum.Padding.normal:
    default:
      return css`
        padding: 3em calc(${math('((100 / 40) * 7)')}% - 1em);

        @media (max-width: ${Dimensions.dimensions.mediaQueries
            .isTabletPortrait}) {
          padding: 1em 1em 0;
        }
      `
  }
}
