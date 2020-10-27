import React from 'react'

import { IProps } from './Interfaces'

import * as Styled from './Style'

export const ProjectImage: React.FC<IProps> = ({ tiltDirection, imageSrc }) => (
  <Styled.Wrapper>
    <Styled.ProjectImage imageSrc={imageSrc} tiltDirection={tiltDirection} />
  </Styled.Wrapper>
)
