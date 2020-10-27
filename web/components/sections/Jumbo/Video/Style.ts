import styled, { css } from 'styled-components'

// Theme
import { Colors } from '../../../global/Theme'

// Components
import { SectionDefault } from '../../../shared/SectionDefault/Component'

export const Video = styled.div`
  height: 0;
  left: 0;
  margin-bottom: -20px;
  padding-top: 50%;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 0;

  > div {
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(1.5);
  }
`

export const Section = styled(SectionDefault)`
  bottom: 40px;
  color: ${Colors.brand.light};
  position: absolute;
  z-index: 97;
`

export const SectionRelative = styled(SectionDefault)`
  color: ${Colors.brand.dark};
`

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 96;
`

export const VideoContainer = styled.div`
  clip-path: url(#maskDefault);  
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  transform: translateZ(0);
  will-change: transform;
`

const createCSS = () => {
  let styles = ''

  for (let i = 1; i < 50; i += 1) {
    styles += `
        &:nth-child(${i}) {
          animation-delay: ${0.05 * (i + 1)}s;
        }
       `
  }

  return css`
    ${styles}
  `
}

export const OverlayLoading = styled.div`
  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  bottom: 0;

  display: flex;
  flex-direction: row;
  left: 0;

  position: absolute;
  right: 0;
  top: 0;
  z-index: 98;

  div {
    background-color: ${Colors.brand.primary};
    flex: 1;
  }

  &.isLoaded {
    div {
      animation-duration: 0s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
      animation-name: fadeOut;

      ${createCSS()}
    }
  }
`
