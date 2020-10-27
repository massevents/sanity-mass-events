// Base
import React from 'react'

// Components
import { Heading } from '../Heading/Component'

// Interfaces
import { IProps } from './Interfaces'

// Enums
import * as HeadingEnum from '../Heading/Enums'
import * as TitleEnum from './Enums'

// Style
import * as Styled from './Style'

export const Title: React.FC<IProps> = ({
  color,
  heading,
  size,
  subheading,
}) => (
  <Styled.Container>
    <p>{subheading}</p>
    <Heading
      color={color ? color : HeadingEnum.Color.primary}
      tag={
        size === TitleEnum.Size.big ? HeadingEnum.Tag.h3 : HeadingEnum.Tag.h5
      }
    >
      {heading}
    </Heading>
  </Styled.Container>
)
