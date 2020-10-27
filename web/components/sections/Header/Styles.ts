import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

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
`
