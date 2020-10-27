// Base
import styled from 'styled-components'

export const Container = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  animation-delay: 0.3s;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;

  animation-name: fadeIn;
  opacity: 0;

  svg {
    height: 100px;
    width: auto;
  }
`
