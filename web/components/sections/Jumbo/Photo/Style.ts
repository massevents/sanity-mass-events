import styled from 'styled-components'

// Theme
import { Colors } from '../../../global/Theme'

// Components
import { SectionDefault } from '../../../shared/SectionDefault/Component'


export const Photo = styled.div<{bgImage: string}>`
  background-image: url(${props => (props.bgImage ? props.bgImage : '')});
  background-position: center center;
  background-size: cover;
  height: 0;
  left: 0;
  margin-bottom: -20px;
  padding-top: 50%;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 0;
`

export const SectionRelative = styled(SectionDefault)`
  color: ${Colors.brand.dark};
`

export const Section = styled(SectionDefault)`
  bottom: 40px;
  color: ${Colors.brand.light};
  position: absolute;
  z-index: 97;
`

export const PhotoContainer = styled.div`
  clip-path: url(#maskDefault);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  transform: translateZ(0);
  will-change: transform;
`
