// Base
import styled from 'styled-components'

// Theme
import { Colors, Dimensions } from '../../global/Theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
  }
`

export const Section = styled.div`
  flex: 1;
  margin-bottom: 2em;
  margin-right: 1em;
  width: 100%;
  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid ${Colors.brand.primary};
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    position: relative;

    h3 {
      margin: 0;
    }

    &:first-of-type {
      margin-top: 0;
    }

    &:before {
      color: ${Colors.brand.primary};
      content: open-quote;
      font-family: 'Georgia', serif;
      font-size: 3em;
      margin-left: -0.8em;
      margin-top: -0.2em;
      position: absolute;
    }

    &:after {
      bottom: 0;
      color: ${Colors.brand.primary};
      content: close-quote;
      font-family: 'Georgia', serif;
      font-size: 3em;
      margin-bottom: -0.2em;
      margin-right: -0.4em;
      position: absolute;
      right: 0;
    }
  }
`
