import styled from 'styled-components'

import { IProps } from './Interfaces'

import { ImagePosition } from './Enums'

import { Dimensions } from '../../global/Theme'

export const ProjectBlock = styled.section<IProps>`
  display: flex;

  flex-direction: ${props =>
    props.imagePosition === ImagePosition.right ? 'row-reverse' : 'row'};
  padding: 2em 0;

  &:first-child{
    padding: 0 0 2em;
  }

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
    padding: 0;
  }

  .fallback_description{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`

export const Column = styled.section<IProps>`
  flex-grow: 1;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
  }

  &:nth-of-type(2) {
    flex-grow: 0;
    ${props =>
      props.imagePosition === ImagePosition.right
        ? `padding-right: 1.4em;`
        : `padding-right: 0;`}
    ${props =>
      props.imagePosition === ImagePosition.left
        ? `padding-left: 1.4em;`
        : `padding-left: 0;`}

    width: 40%;

    @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
      padding: 1.4em 0;
      width: 100%;
    }
  }
`

export const Image = styled.img`
  display: block;
  height: 80px;
  margin: 0 0 1em;
  object-fit: contain;
  object-position: left bottom;
  width: 80px;
`
