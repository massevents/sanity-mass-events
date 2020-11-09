// Enums
import * as ColorEnum from '../../../enums/Color'
import * as ButtonEnum from './Enums'

import React from 'react'

export interface IProps {
  buttonType?: ButtonEnum.Type
  className?: string;
  target?: string;
  title?: string;
  children?: string | React.ReactElement | (string | React.ReactElement)[]
  color?: ColorEnum.Color
  disabled?: boolean
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClickHandler?: () => void
}
