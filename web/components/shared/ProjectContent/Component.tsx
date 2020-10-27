// Base
import React from "react";
import Carousel from "nuka-carousel";
const BlockContent = require('@sanity/block-content-to-react')
import client from '../../../client'

// Components
import { Title } from "../Title/Component";
import { SwipeIcon } from "../SwipeIcon/Component";
import { Heading } from "../Heading/Component";

// Interfaces
import { IProps } from "./Interfaces";

// Enums
import * as HeadingEnum from "../Heading/Enums";

// Styles
import * as Styled from "./Style";

// Sanity
import imageUrlBuilder from '@sanity/image-url';

export const ProjectContent = (props:IProps) => {
  const serializers = {
    types: {
      code: (props:any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source)
  }

  const logoUrl = urlFor(props && props.media!.logoSrc!).height(50).url();

  return (
    <>
      <Styled.Container>
        {(!props.description || !props.description.customHtml) && (
          <Styled.Section>
            <Styled.Content>

              <Styled.Image src={logoUrl!} alt={props.title!} />

              <Styled.Title>
                <Title heading={props.description ? props.description.shortDescriptionTitle : ""} subheading="" />
              </Styled.Title>

              <BlockContent blocks={props.description && props.description.shortDescription} serializers={serializers} />

            </Styled.Content>
            <Styled.Content>
              <Styled.Title>
                <Title heading={props.description ? props.description.massEventsTitle : ""} subheading="" />
              </Styled.Title>
              <BlockContent blocks={props.description && props.description.massEvents} serializers={serializers} />

            </Styled.Content>
          </Styled.Section>
        )}

        {(props.description && props.description.customHtml) && (
          <Styled.Section>
            <Styled.Content>
              <Styled.Image src={logoUrl!} alt={props.title!} />
              <BlockContent blocks={props.description.customHtml} serializers={serializers} />

            </Styled.Content>
          </Styled.Section>
        )}

{(!props.description || !props.description.customHtml) && (
          <Styled.Section className="section__overflow-hidden">
            <Styled.CarouselContainer>
              <Styled.Title>
                <Title heading="Sfeerimpressie" subheading="" />
              </Styled.Title>
              <Styled.PhotoContainer>
                <Carousel
                  cellSpacing={20}
                  frameOverflow="none"
                  initialSlideHeight={406}
                  initialSlideWidth={300}
                  slidesToScroll={1}
                  slidesToShow={1}
                  slideWidth={1}
                  swiping={true}
                  withoutControls={true}
                  autoplay={true}
                  wrapAround={true}
                >
                  {props.media && props.media.images.map((e:any, index:number) => {
                    const src = urlFor(e).width(960).url();
                    return (
                      <Styled.ImageContainer key={index}>
                        <img src={src!} />
                      </Styled.ImageContainer>
                    );
                  })}
                </Carousel>
              </Styled.PhotoContainer>
              <SwipeIcon />
            </Styled.CarouselContainer>
          </Styled.Section>
        )}
      </Styled.Container>
      <Styled.Container>
        <Styled.Section>
          <Styled.Content>
            <Styled.Title>
              <Title
                heading={props.sponsors && props.sponsors.titleSponsors ? props.sponsors.titleSponsors : "Partners en Sponsoren"}
                subheading=""
              />
            </Styled.Title>
            {props.sponsors && props.sponsors.partners &&
              props.sponsors.partners.map((e:any, index:number) => {
                return (
                  <React.Fragment key={`partnergroup-${index}`}>
                    {e.type != "all" && (
                      <Heading color={HeadingEnum.Color.dark} tag={HeadingEnum.Tag.h6}>
                        {e.type}
                      </Heading>
                    )}
                    <Styled.SponsorList>
                      {e.sponsors.map((f:any, fIndex:number) => {
                        return <li key={`sponsor-${fIndex}`}>{f}</li>;
                      })}
                    </Styled.SponsorList>
                  </React.Fragment>
                );
              })}
          </Styled.Content>
        </Styled.Section>
        <Styled.Section>
          <Styled.Content>
            <Styled.Title>
              <Title heading={props.activities && props.activities.titleActivities ? props.activities.titleActivities : 'Things we do!'} subheading="" />
            </Styled.Title>

            <Styled.ActivitiesList>
              {props.activities && props.activities.activities && props.activities.activities.map((g:any, gIndex:number) => {
                return <li key={`activity-${gIndex}`}>{g}</li>;
              })}
            </Styled.ActivitiesList>
          </Styled.Content>
        </Styled.Section>
      </Styled.Container>
    </>
  );
};
