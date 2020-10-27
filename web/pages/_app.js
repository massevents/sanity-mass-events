import React from "react";
import BaseApp from "next/app";
import client from "../client";
// import 'normalize.css'
import "../styles/shared.module.css";
import "../styles/layout.css";
import { useMediaQuery } from "react-responsive";
import { Dimensions } from "../components/global/Theme";

import { TypographyStyle } from "../components/global/Typography";
import { GlobalStyle } from "../components/global/Global";

const ComponentWrapper = ({ children }) => {
  // Mobile
  const isMobile = useMediaQuery({
    query: `(max-width: ${Dimensions.dimensions.mediaQueries.isMobile})`,
  });
  const isMobileLandscape = useMediaQuery({
    query: `(min-width: ${Dimensions.dimensions.mediaQueries.isMobileLandscape})`,
  });

  // Tablet
  const isTabletPortrait = useMediaQuery({
    query: `(min-width: ${Dimensions.dimensions.mediaQueries.isTabletPortrait})`,
  });
  const isTabletLandscape = useMediaQuery({
    query: `(min-width: ${Dimensions.dimensions.mediaQueries.isTabletLandscape})`,
  });

  // Desktop
  const isDesktop = useMediaQuery({
    query: `(min-width: ${Dimensions.dimensions.mediaQueries.isDesktop})`,
  });
  const isDesktopLarge = useMediaQuery({
    query: `(min-width: ${Dimensions.dimensions.mediaQueries.isDesktopLarge})`,
  });

  // Extra
  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)",
  });
  const isRetina = useMediaQuery({
    query: "(min-resolution: 2dppx)",
  });

  return React.cloneElement(children, {
    mediaQueries: {
      isDesktop,
      isDesktopLarge,
      isMobile,
      isMobileLandscape,
      isPortrait,
      isRetina,
      isTabletLandscape,
      isTabletPortrait,
    },
  });
};

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    mainNavigation -> {
      ...,
      "title": page->title
    }
  }[0]
  `;

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then((config) => {
      if (!config) {
        return { pageProps };
      }
      if (config && pageProps) {
        pageProps.config = config;
      }
      return { pageProps };
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <TypographyStyle />
        <GlobalStyle />
        <ComponentWrapper>
          <Component {...pageProps} />
        </ComponentWrapper>
      </>
    );
  }
}

export default App;
