// Theme
import { Colors, Dimensions } from '../../global/Theme'

// Base
import styled from 'styled-components'

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: reverse-row;
  padding: 2em 0 0;
  text-align: right;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    padding: 2em 0;
  }
`

export const Section = styled.div`
  flex: 0 0 auto;
  padding: 0;
  text-align: right;
  width: 100%;

  ul {
    display: inline;
    margin: 0;
    padding: 0;
    text-align: right;
    width: 100%;

    li {
      display: inline;
      list-style: none;
      margin: 0 0 0 2em;

      a:not(.light) {
        color: ${Colors.brand.dark};
        padding-bottom: 0.75em;
        position: relative;
        text-decoration: none;

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
      }

      

    }
  }
`
