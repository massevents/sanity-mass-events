// Base
import styled from 'styled-components'

// Mixins
import { MixinPadding } from './mixins/Padding'

// Props
import { IProps } from './Interfaces'

// Style
export const Section = styled.section<IProps>`
  box-sizing: border-box;
  margin: 0;

  &.section__overflow-hidden{
    overflow: hidden;
  }

    /* stylelint-disable-next-line */
  ${props =>
    props.isAbsolute === true ? `position: absolute;` : `position: relative;`}

    /* stylelint-disable-next-line */
  ${props => (props.isAbsolute === true ? `z-index: 9;` : ``)}
  width: 100%;
  
  /* stylelint-disable-next-line */
  ${props => MixinPadding(props)}
`
