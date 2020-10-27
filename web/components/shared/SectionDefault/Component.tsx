// Base
import * as React from 'react'

// Props
import { IProps } from './Interfaces'

// Style
import * as Styled from './Style'

export const SectionDefault: React.FC<IProps> = ({
  children,
  className,
  isAbsolute,
  padding,
}) => (
  <Styled.Section
    className={className}
    padding={padding}
    isAbsolute={isAbsolute}
  >
    {children}
  </Styled.Section>
)
