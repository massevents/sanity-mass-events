// Base
import * as React from 'react'

// Interfaces
import { IProps } from './Interfaces'

// Style
import * as Styled from './Style'

export const ButtonDefault: React.FC<IProps> = ({
  children,
  className,
  color,
  disabled,
  href,
  onClickHandler,
  buttonType,
  type,
  target,
  title,
}) => (
  <>
    {href && (
      <Styled.ButtonHref
        disabled={disabled}
        href={href}
        color={color}
        buttonType={buttonType}
        target={target}
        title={title}
        className={className}
      >
        {children}
      </Styled.ButtonHref>
    )}
    {!href && (
      <Styled.Button
        type={type}
        disabled={disabled}
        onClick={onClickHandler}
        color={color}
        buttonType={buttonType}
      >
        {children}
      </Styled.Button>
    )}
  </>
)
