// Base
import React from 'react'

// Enums
import * as PaddingEnum from './Enums'

export interface IProps {
  children?: React.ReactNode;
  className?: string
  isAbsolute?: boolean
  padding?: PaddingEnum.Padding
}
