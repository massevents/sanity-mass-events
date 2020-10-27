import React from 'react'

import * as Styled from './Style'

import { IProps } from './Interfaces'

export const Heading: React.FC<IProps> = ({ children, color, tag }) => (
  <Styled.Heading color={color} tag={tag}>
    {children}
  </Styled.Heading>
)
