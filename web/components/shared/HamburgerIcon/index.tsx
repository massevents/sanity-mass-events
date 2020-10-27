// Base
import * as React from 'react'

// Interfaces
import { IProps } from './Interfaces'

// Style
import * as Styled from './Style'

export const HamburgerIconDefault: React.FC<IProps> = ({
  color,
  onClickHandler,
  isOpen,
}) => {
  const hamburgerClassClosed = isOpen
    ? 'isHamburgerIcon isVisible'
    : 'isHamburgerIcon'
  const hamburgerClassOpen = isOpen ? 'isCloseIcon' : 'isCloseIcon isVisible'

  return (
    <Styled.Icon color={color} onClick={onClickHandler}>
      <svg viewBox="0 0 44 44">
        <path
          stroke={color}
          className={hamburgerClassClosed}
          d="M 2,12 L 32,12"
        />
        <path
          stroke={color}
          className={hamburgerClassClosed}
          d="M 2,22 L 32,22"
        />
        <path
          stroke={color}
          className={hamburgerClassClosed}
          d="M 2,32 L 22,32"
        />
      </svg>
      <svg viewBox="0 0 44 44">
        <path className={hamburgerClassOpen} d="M 7,12 L 27,32" />
        <path className={hamburgerClassOpen} d="M 7,32 L 27,12" />
      </svg>
    </Styled.Icon>
  )
}
