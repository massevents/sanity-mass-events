// Base
import styled from 'styled-components'

import { Dimensions } from '../../global/Theme'

export const Container = styled.div`
  display: flex;

  flex-direction: row;
  width: 100%;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: none;
  }
`

export const Section = styled.div`
  flex: 1;

  width: auto;

  display: flex;
  flex-flow: column wrap;

  &:last-of-type {
    margin-right: 0;
  }

  img{
    height: 3rem;
  }

  a{
    color: inherit;
    text-decoration: underline;
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
