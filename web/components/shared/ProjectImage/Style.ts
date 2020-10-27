import styled from 'styled-components'

import { IProps } from './Interfaces'

import { TiltDirection } from './Enums'

export const ProjectImage = styled.picture<IProps>`
  background: url(${props => props.imageSrc}) center center / cover;
  border-radius: 4px;
  display: block;
  transform: rotate(
    ${props => (props.tiltDirection === TiltDirection.right ? '4deg' : '-4deg')}
  );
  width: 100%;

  &::after {
    content: '';
    display: block;
    padding-top: 75%;
  }
`

export const Wrapper = styled.section`
  padding: 1em;
  width: 100%;
`
