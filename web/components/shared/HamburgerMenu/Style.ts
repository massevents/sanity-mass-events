// Theme
import { Colors } from '../../global/Theme'

// Base
import styled, { css } from 'styled-components'

const createCSS = () => {
  let styles = ''

  for (let i = 1; i < 10; i += 1) {
    styles += `
      &:nth-child(${i}) {
        animation-delay: ${0.1 * (i + 1)}s;
      }
     `
  }

  return css`
    ${styles}
  `
}

export const Nav = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  background-color: ${props => props.theme.brand.primary};
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  padding-top: 8em;

  position: fixed;
  right: 0;
  top: 0;
  z-index: 99998;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    animation-duration: 0.1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-name: fadeIn;
    height: 4em;
    list-style: none;
    ${createCSS()}
    opacity: 0;
    position: relative;
    width: 100%;

    a {
      bottom: 0;
      color: ${props =>
        props.color && props.color === 'colored' ? 'black' : 'white'};
      left: 0;
      padding: 1.25em;
      position: absolute;
      right: 0;
      text-decoration: none;
      top: 0;

      span {
        display: inline;
        font-size: 2em;
        padding-bottom: 0.25em;
        position: relative;

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

        &.isActive {
          &:before,
          &:after {
            background-color: ${props => props.theme.brand.neutral};
            width: 50%;
          }
        }
      }
    }
  }
`

Nav.defaultProps = { theme: Colors }
