// Base
import styled from 'styled-components'

import { Colors, Dimensions } from '../../global/Theme'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3em 0 0;
  width: 100%;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
    margin: 3em 0;
  }
`

export const Section = styled.div`
  flex: 1;
  margin-right: 1em;
  &.section__overflow-hidden {
  overflow: hidden;
}
  width: 100%;

  &:last-of-type {
    margin-right: 0;
  }
`

export const Content = styled.div`
  margin: 0 0 2em;
  position: relative;
`

export const Title = styled.div``

export const CarouselContainer = styled.div``

export const ImageContainer = styled.div`
  padding: 0;
  padding-top: 100%;
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

export const PhotoContainer = styled.div`
  position: relative;
`

export const Icon = styled.div`
  padding: 5px;
  text-align: center;
`

export const SponsorList = styled.ul`
  margin: 0 0 2em;
  padding: 0;

  a{
    color: inherit;
    text-decoration: none;
  }

  li{
    background-color: ${Colors.brand.neutral};
    display: inline-block;
    margin: 5px 10px 5px 0;
    padding: 5px; 

    &:hover{
    background-color: ${Colors.brand.grey};

    }

    &.no-bg{
      background-color: transparent;
    }
  }
`


export const ActivitiesList = styled.ul`
  margin: 0;
  padding: 0;

  li{
    background-color: ${Colors.brand.neutral};
    display: inline-block;
    margin: 5px 10px 5px 0;
    padding: 5px; 
  }
`

export const Image = styled.img`
  display: block;
  height: 80px;
  margin: 0 0 1em;
  object-fit: contain;
  object-position: left bottom;
  width: 80px;
  transform: translateY(calc(-100% - 1em));
  position: absolute;
`
