import styled from 'styled-components'

import { IProps } from './Interfaces'

import { ImagePosition } from './Enums'

import { Dimensions } from '../../global/Theme'

export const ProjectBlock = styled.section<IProps>`
  flex-basis: 33%;
  padding: 2em 0;

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

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
  }

`
