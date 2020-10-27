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

  margin-right: 1em;
  width: 100%;
  &:last-of-type {
    margin-right: 0;
  }

  blockquote {
    border-left: 4px solid ${Colors.brand.primary};
    margin: 1.5em 10px;
    padding: 0.5em 10px;

    &:first-of-type {
      margin-top: 0;
    }
  }
`
