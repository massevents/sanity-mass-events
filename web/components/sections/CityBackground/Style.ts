// Base
import styled from 'styled-components'
import { Dimensions } from '../../global/Theme'

export const Container = styled.div`
  background-image: url('/images/maps.svg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 40em;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(20%, -20%);
  width: 40em;
  z-index: -1;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    right: -5em;
    width: 25em;
  }

  svg{opacity:0.8;fill:#F15B50;
  }
`
