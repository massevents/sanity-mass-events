// Base
import { css, FlattenSimpleInterpolation } from 'styled-components'

// Theme
import { Colors } from '../../../global/Theme'

// Props
import { IProps } from '../Interfaces'

// Enums
import * as HeadingEnum from '../Enums'

export const MixinColor = ({ color }: IProps): FlattenSimpleInterpolation => {
  switch (color) {
    case HeadingEnum.Color.dark:
      return css`
        color: ${Colors.brand.dark};
      `
    case HeadingEnum.Color.light:
      return css`
        color: ${Colors.brand.light};
      `
    case HeadingEnum.Color.primary:
    default:
      return css`
        color: ${Colors.brand.primary};
      `
  }
}
