// Base
import styled from 'styled-components'
import { Dimensions } from '../../global/Theme'

export const FullContainer = styled.div`
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
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
`
