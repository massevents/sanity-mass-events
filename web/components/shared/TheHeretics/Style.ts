// Theme
import { Colors } from '../../global/Theme'

// Base
import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  svg {
    fill: ${darken(0.2, Colors.brand.primary)};
    height: 26px;
    transition: all 0.2s linear;
    width: auto;

    &:hover {
      fill: ${darken(0.3, Colors.brand.primary)};
    }
  }
`
