// Base
import { css } from 'styled-components'

// Theme
import { Colors } from '../../../global/Theme'

// Enums
import * as ColorEnum from '../../../../enums/Color'
import * as ButtonEnum from '../Enums'

// Interfaces
import { IProps } from '../Interfaces'

export const MixinColor = ({ disabled, color, buttonType }: IProps) => {
  if (disabled) {
    return css`
      background-color: transparent;
      color: ${Colors.brand.grey};
      cursor: not-allowed !important;
    `
  } else {
    if (buttonType === ButtonEnum.Type.inline) {
      return css`
        background-color: transparent;
        color: ${Colors.brand.dark};
      `
    } else {
      switch (color) {
        case ColorEnum.Color.dark:
          return css`
            background-color: ${Colors.brand.dark};
            color: ${Colors.brand.light};
          `
        case ColorEnum.Color.primary:
          return css`
            background-color: ${Colors.brand.primary};
            color: ${Colors.brand.light};
          `
        case ColorEnum.Color.secondary:
          return css`
            background-color: ${Colors.brand.secondary};
            color: ${Colors.brand.light};
          `
        case ColorEnum.Color.light:
        default:
          return css`
            background-color: ${Colors.brand.light};
            color: ${Colors.brand.dark};
          `
      }
    }
  }
}
