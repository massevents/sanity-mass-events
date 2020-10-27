// Base
import styled, { css } from 'styled-components'

// Theme
import { Colors } from '../../global/Theme'

// Mixins
import { MixinColor } from './mixins/Color'

// Props
import { IProps } from './Interfaces'

const createHamburgerToTransitions = () => {
  let styles = ''

  for (let i = 1; i < 4; i += 1) {
    styles += `
        &:nth-child(${i}) {
            transition: all .2s linear ${0.1 * i + 0.2}s;
        }
       `
  }

  return css`
    ${styles}
  `
}
const createHamburgerFromTransitions = () => {
  let styles = ''

  for (let i = 1; i < 4; i += 1) {
    styles += `
          &:nth-child(${i}) {
              transition: all .2s linear ${0.1 * (3 - i)}s;
          }
         `
  }

  return css`
    ${styles}
  `
}

const createCloseToTransitions = () => {
  let styles = ''

  for (let i = 1; i < 3; i += 1) {
    styles += `
        &:nth-child(${i}) {
            transition: all .2s linear ${0.1 * i + 0.3}s;
        }
       `
  }

  return css`
    ${styles}
  `
}
const createCloseFromTransitions = () => {
  let styles = ''

  for (let i = 1; i < 3; i += 1) {
    styles += `
          &:nth-child(${i}) {
              transition: all .2s linear ${0.1 * (2 - i)}s;
          }
         `
  }

  return css`
    ${styles}
  `
}

export const Icon = styled.a<IProps>`
  height: 2.6em;
  position: relative;
  width: 2.6em;
  z-index: 99999;

  svg {
    position: absolute;
  }

  path {
    stroke-dasharray: 44 44;
    stroke-linejoin: round;
    stroke-width: 0.2em;

    &.isHamburgerIcon {
      ${createHamburgerToTransitions()}

      /* stylelint-disable-next-line */
      ${props => MixinColor(props)}

      &.isVisible {
        ${createHamburgerFromTransitions()}
        stroke-dashoffset: 44;
      }
    }

    &.isCloseIcon {
      ${createCloseToTransitions()}
      
      stroke: ${Colors.brand.light};

      &.isVisible {
        ${createCloseFromTransitions()}
        stroke-dashoffset: 44;
      }
    }
  }
`
