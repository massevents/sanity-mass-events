// Theme
import { Colors, Dimensions } from '../../global/Theme'

// Base
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
  }
`

export const SectionTop = styled.div`
  background-color: ${Colors.brand.dark};
  flex: 0 0 auto;
  width: 100%;
`

export const SectionMiddle = styled.div`
  background-color: ${Colors.brand.primary};
  box-sizing: border-box;
  flex: 0 0 2.5em;
  width: 100%;
`

export const SectionBottom = styled.div`
  background-color: ${Colors.brand.dark};
  box-sizing: border-box;
  flex: 0 0 2em;
  width: 100%;
`

export const ActionBar = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  justify-content: space-between;
  padding: 0.875em 0;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      list-style: none;
      margin: 0 1em 0 0;
    }
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${Colors.brand.light};
    cursor: pointer;
    padding-bottom: 0.25em;
    position: relative;
    text-decoration: none;

    &.isNotUnderlined {
      &:before,
      &:after {
        display: none !important;
      }
    }

    &:before,
    &:after {
      background-color: ${Colors.brand.light};
      bottom: 0;
      content: '';
      height: 0.25em;
      position: absolute;
      width: 0;
    }

    &:before {
      right: 50%;
      transition: all 0.2s linear;
    }

    &:after {
      left: 50%;
      transition: all 0.2s linear;
    }

    &:hover {
      &:before {
        width: 50%;
      }
      &:after {
        width: 50%;
      }
    }
  }
`

export const LinksBar = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  justify-content: space-between;
  padding: 0.875em 0;
  width: 100%;

  @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
    display: block;
  }

  ul {
    margin: 0;
    padding: 0;

    @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
      display: flex;
    }

    li {
      display: inline-block;
      list-style: none;
      margin: 0 0 0 1em;

      @media (max-width: ${Dimensions.dimensions.mediaQueries
          .isTabletPortrait}) {
        flex: 1;
      }
      /* stylelint-disable */

      a {
        @media (max-width: ${Dimensions.dimensions.mediaQueries
            .isTabletPortrait}) {
          margin-bottom: 0;
        }
      }
    }
  }

  a {
    color: ${Colors.brand.light};
    padding-bottom: 0.25em;
    position: relative;
    text-decoration: none;

    @media (max-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait}) {
      display: block;
      margin-bottom: 2.5em;
      padding-bottom: 0;
      text-align: center;
    }

    &.isNotUnderlined {
      &:before,
      &:after {
        display: none !important;
      }
    }

    &:before,
    &:after {
      background-color: ${Colors.brand.primary};
      bottom: 0;
      content: '';
      height: 0.25em;
      position: absolute;
      width: 0;
    }

    &:before {
      right: 50%;
      transition: all 0.2s linear;
    }

    &:after {
      left: 50%;
      transition: all 0.2s linear;
    }

    &:hover {
      &:before {
        width: 50%;
      }
      &:after {
        width: 50%;
      }
    }
  }
`
