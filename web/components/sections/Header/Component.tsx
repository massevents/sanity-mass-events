import React from "react";
import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
// import HamburgerIcon from "../../icons/Hamburger";
import { LogoDefault } from "../../shared/LogoDefault";
import * as LogoEnum from "../../shared/LogoDefault/Enums";
import { SectionDefault } from "../../shared/SectionDefault/Component";
import { IConfig } from "../../Layout";
import * as Styled from "./Styles";
import { IMediaQueries } from "../../../interfaces/IMediaQueries";
import { CSSTransition } from "react-transition-group";
import { HamburgerIconDefault } from "../../shared/HamburgerIcon";
import * as ColorEnum from "../../../enums/Color";

import { HamburgerMenuDefault } from "../../shared/HamburgerMenu";
import { NavDefault } from "../../shared/Nav";


export interface IProps {
  router: NextRouter;
  config: IConfig;
  type: string;
  isAbsolute: boolean;
  mediaQueries: IMediaQueries;
}
export interface Props {
  pageProps: PageProps;
}
export interface PageProps {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  activities: Activities;
  description: Description;
  disallowRobots: boolean;
  includeInSitemap: boolean;
  media: Media;
  seo: Seo;
  slug: Slug;
  socialMedia: SocialMedia;
  sponsors: Sponsors;
  subTitle: string;
  title: string;
  config: IConfig;
}
export interface Activities {
  activities?: (string)[] | null;
  titleActivities: string;
}
export interface Description {
  massEvents?: (MassEventsEntityOrShortDescriptionEntity)[] | null;
  massEventsTitle: string;
  shortDescription?: (MassEventsEntityOrShortDescriptionEntity)[] | null;
  shortDescriptionTitle: string;
}
export interface MassEventsEntityOrShortDescriptionEntity {
  _key: string;
  _type: string;
  children?: (ChildrenEntity)[] | null;
  markDefs?: (null)[] | null;
  style: string;
}
export interface ChildrenEntity {
  _key: string;
  _type: string;
  marks?: (null)[] | null;
  text: string;
}
export interface Media {
  imageSrc: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  images?: (ImagesEntity)[] | null;
  logoSrc: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  projectHeader: ProjectHeader;
  projectType: string;
}
export interface BgImageOrImageSrcOrLogoSrcOrOpenGraphImage {
  _type: string;
  asset: AssetOrPageOrFrontpage;
}
export interface AssetOrPageOrFrontpage {
  _ref: string;
  _type: string;
}
export interface ImagesEntity {
  _key: string;
  _type: string;
  asset: AssetOrPageOrFrontpage;
}
export interface ProjectHeader {
  bgImage: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
  videoId: string;
}
export interface Seo {
  openGraphImage: BgImageOrImageSrcOrLogoSrcOrOpenGraphImage;
}
export interface Slug {
  _type: string;
  current: string;
}
export interface SocialMedia {
  facebookUrl: string;
}
export interface Sponsors {
  partners?: (PartnersEntity)[] | null;
  titleSponsors: string;
}
export interface PartnersEntity {
  _key: string;
  _type: string;
  sponsors?: (string)[] | null;
  type: string;
}
export interface MainNavigationEntity {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  index?: number;
  type?: string;
  disallowRobots?: boolean | null;
  includeInSitemap?: boolean | null;
  page: AssetOrPageOrFrontpage;
  slug: Slug;
  title: string;
}
const Header = (props: IProps) => {
  const { config, router, type, isAbsolute, mediaQueries } = props;
  const { mainNavigation } = config;

  const logoColor = type.toLowerCase() === "colors" ? LogoEnum.Color.colored : LogoEnum.Color.white;

  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  React.useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  });

  if (!config) {
    console.error("Missing config");
    return <div>Missing config</div>;
  }

  return (
    <>
      <SectionDefault isAbsolute={isAbsolute}>
        <Styled.Container>
          {process.env.NODE_ENV === 'development' && (<h2 className="watermark">DEVELOPMENT</h2>)}
          <Link
            href={{
              pathname: "/LandingPage",
              query: {
                slug: "/",
              },
            }}
            as="/"
            prefetch
          >
            <a title="Bezoek de home-pagina">
              <LogoDefault color={logoColor} />
            </a>
          </Link>
          {mediaQueries.isTabletPortrait &&  (<NavDefault color={logoColor} data={mainNavigation} router={router} /> ) }
          
          {!mediaQueries.isTabletPortrait && (
            <HamburgerIconDefault
              color={logoColor === "white" ? ColorEnum.Color.light : ColorEnum.Color.dark}
              isOpen={isMenuOpen}
              onClickHandler={toggleMenu}
            />
          )}

          <CSSTransition
            in={isMenuOpen}
            timeout={350}
            classNames="hamburger-menu"
            unmountOnExit={true}
          >
            {!mediaQueries.isTabletPortrait &&   (
              <HamburgerMenuDefault data={mainNavigation} router={router} />
            )}
          </CSSTransition>
        </Styled.Container>
      </SectionDefault>

  
    </>
  );
};

export default withRouter(Header);
