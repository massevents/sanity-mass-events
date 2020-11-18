import React from 'react'

import { IProps } from './Interfaces'
import { TiltDirection } from './Enums'

import * as Styled from './Style'

export const ProjectImage: React.FC<IProps> = ({ tiltDirection, imageSrc, format }) => (
  <Styled.Wrapper>
    <Styled.ProjectImage imageSrc={imageSrc} tiltDirection={format === 'poster' ? TiltDirection.straight : tiltDirection} />
  </Styled.Wrapper>
)
