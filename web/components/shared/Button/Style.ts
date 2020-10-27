// Theme
import { Colors, Dimensions } from '../../global/Theme'

// Base
import styled from 'styled-components'

// Mixins
import { MixinColor } from './mixins/Color'
import { MixinType } from './mixins/Type'

// Props
import { IProps } from './Interfaces'

export const Button = styled.button<IProps>`
  border: none;
  border-radius: 1.8em;
  box-sizing: border-box;
  color: ${Colors.brand.dark};
  cursor: pointer;
  font-size: 1rem;
  height: 2.6em;
  margin: 0;
  max-width: 20em;
  min-width: 2em;
  padding: 0 1em;
  position: relative;
  text-decoration: none;
  transition: all 0.2s linear;
  width: auto;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
    margin-bottom: 1em;
    max-width: none;
    min-height: 3em;
    width: 100%;
  }

  /* stylelint-disable-next-line */
  ${props => MixinColor(props)}
  ${props => MixinType(props)}
`

export const ButtonHref = styled.a<IProps>`
  border-radius: 1.8em;
  color: ${Colors.brand.dark};
  cursor: pointer;
  font-size: 1rem;
  height: 2.6em;
  max-width: 20em;
  min-width: 2em;
  padding: 0 1em;
  padding-top: 0.55em;
  position: relative;
  text-decoration: none;
  transition: all 0.2s linear;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
    margin-bottom: 1em;
    max-width: none;
    min-height: 3em;
    padding: 0 1em;
    padding-top: 0.75em;
    width: 100%;
  }

  /* stylelint-disable-next-line */
  ${props => MixinColor(props)}
  ${props => MixinType(props)}
`
