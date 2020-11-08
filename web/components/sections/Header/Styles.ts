import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: relative;

  .hamburger-menu-enter {
    opacity: 0;
  }
  .hamburger-menu-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .hamburger-menu-exit {
    opacity: 1;
  }
  .hamburger-menu-exit-active {
    opacity: 0;
    transition: opacity 200ms 200ms;
  }

  .watermark{
    opacity: 0.3;
    position: absolute;
    font-size: 60px;
    right: 0;
    top: 0;
  }
`
