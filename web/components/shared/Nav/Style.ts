// Theme
import { Colors } from '../../global/Theme'

// Base
import styled, { css } from 'styled-components'

const createCSS = () => {
  let styles = ''

  for (let i = 1; i < 10; i += 1) {
    styles += `
      &:nth-child(${i}) {
        animation-delay: ${0.15 * (i + 1)}s;
      }
     `
  }

  return css`
    ${styles}
  `
}

export const Nav = styled.nav`
  @keyframes fadeIn {
    from {
      transform: translateY(1rem);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  li {
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: fadeIn;
    display: inline-block;
    margin: 0 1em;
    ${createCSS()}
    opacity: 0;
    position: relative;
    transform: translateY(1rem);

    a {
      color: ${props =>
        props.color && props.color === 'colored' ? 'black' : 'white'};
      padding-bottom: 0.25em;
      position: relative;
      text-decoration: none;

      &:before,
      &:after {
        background-color: ${props => props.theme.brand.primary};
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
      &.isActive {
        &:before,
        &:after {
          background-color: ${props => props.theme.brand.neutral};
          width: 50%;
        }
      }
    }
  }
`

Nav.defaultProps = { theme: Colors }
