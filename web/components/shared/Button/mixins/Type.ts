// Base
import { css } from 'styled-components'

// Theme
import { Colors } from '../../../global/Theme'

// Enums
import * as ButtonEnum from '../Enums'

// Interfaces
import { IProps } from '../Interfaces'

export const MixinType = ({ buttonType }: IProps) => {
  switch (buttonType) {
    case ButtonEnum.Type.inline:
      return css`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;

        animation-name: fadeIn;

        box-shadow: none;
        display: inline-block;
        text-align: left;

        &:before,
        &:after {
          background-color: ${Colors.brand.primary};
          bottom: 0;
          content: '';
          height: 0.25em;
          position: absolute;
          width: 0;
        }

        &:before {
          right: 50%;
          transition: all 0.2s linear;
        }

        &:after {
          left: 50%;
          transition: all 0.2s linear;
        }

        &:hover {
          &:before {
            width: 50%;
          }
          &:after {
            width: 50%;
          }
        }
      `

    case ButtonEnum.Type.pill:
    default:
      return css`
        box-shadow: 0 1em 0.5em -0.75em rgba(0, 0, 0, 0.2);
        display: inline-block;
        text-align: center;
      `
  }
}
