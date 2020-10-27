import React from 'react'
import styled from 'styled-components'

import { IProps } from './Interfaces'

import { MixinColor } from './mixins/Color'
import { MixinTag } from './mixins/Tag'

export const Heading = styled(({ tag, color, children, ...props }: IProps) =>
  React.createElement(tag, props, children)
)`
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;

  /* stylelint-disable-next-line */
  ${props => MixinColor(props)}

  /* stylelint-disable-next-line */
  ${props => MixinTag(props)}
`
