import React from 'react'

import { IProps } from './Interfaces'

import { TiltDirection } from './Enums'

import * as Styled from './Style'

export const NewsImage: React.FC<IProps> = ({ imageSrc }) => (
  <Styled.Wrapper>
    <Styled.NewsImage imageSrc={imageSrc} tiltDirection={TiltDirection.straight} />
  </Styled.Wrapper>
)
