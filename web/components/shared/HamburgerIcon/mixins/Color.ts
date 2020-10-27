// Base
import { css } from 'styled-components'

// Theme
import { Colors } from '../../../global/Theme'

// Enums
import * as ColorEnum from '../../../../enums/Color'

// Interfaces
import { IProps } from '../Interfaces'

export const MixinColor = ({ color }: IProps) => {
  switch (color) {
    case ColorEnum.Color.dark:
      return css`
        stroke: ${Colors.brand.dark};
      `
    case ColorEnum.Color.primary:
      return css`
        stroke: ${Colors.brand.primary};
      `
    case ColorEnum.Color.secondary:
      return css`
        stroke: ${Colors.brand.secondary};
      `
    case ColorEnum.Color.light:
    default:
      return css`
        stroke: ${Colors.brand.light};
      `
  }
}
