// Base
import styled from 'styled-components'

import { Dimensions } from '../../global/Theme'

export const Container = styled.div`
  display: none;

  flex-direction: row;
  width: 100%;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
  }
`

export const Section = styled.div`
  flex: 1;
  margin: 0 0 2em;
  margin-right: 1em;

  width: 100%;

  &:last-of-type {
    margin-right: 0;
  }
`

export const SliderSection = styled.div`
  margin: 0 0 2em;
  margin-right: 1em;

  width: 100%;

  &:last-of-type {
    margin-right: 0;
  }
`

export const TeamImage = styled.div`
  margin: 0 0 1em;
  padding-top: 50%;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }
`
