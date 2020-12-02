// Base
import React from "react";
import Carousel from "nuka-carousel";
const BlockContent = require("@sanity/block-content-to-react");
import client from "../../../client";

// Components
import { Title } from "../Title/Component";
import { SwipeIcon } from "../SwipeIcon/Component";
import { Heading } from "../Heading/Component";
import { Sponsor } from "../Sponsor/Component";

// Interfaces
import { IProps } from "./Interfaces";

// Enums
import * as HeadingEnum from "../Heading/Enums";

// Styles
import * as Styled from "./Style";

// Sanity
import imageUrlBuilder from "@sanity/image-url";

export const NewsContent = (props: IProps) => {
  const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source);
  }

  console.log(props);

  return (
    <>
      <Styled.Container>
        <Styled.Section>
          <Styled.Content>
            <p>
              Geschreven door {props.author.name} op{" "}
              {new Intl.DateTimeFormat("nl-NL", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(props.createdAt)}
            </p>
          </Styled.Content>
        </Styled.Section>
      </Styled.Container>

      <Styled.Container>
        <Styled.Section>
          <Styled.Content>
            <BlockContent blocks={props.description} serializers={serializers} />
          </Styled.Content>
        </Styled.Section>
      </Styled.Container>
      <Styled.Container>
        {props.media && props.media.images && (
          <Styled.Section className="section__overflow-hidden">
            <Styled.CarouselContainer>
              <Styled.Title>
                <Title heading="Foto album" subheading="" />
              </Styled.Title>
              <Styled.PhotoContainer>
                <Carousel
                  cellSpacing={20}
                  frameOverflow="none"
                  initialSlideHeight={406}
                  initialSlideWidth={300}
                  slidesToScroll={1}
                  slidesToShow={2}
                  slideWidth={1}
                  swiping={true}
                  withoutControls={true}
                  autoplay={true}
                  wrapAround={true}
                >
                  {props.media &&
                    props.media.images.map((e: any, index: number) => {
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
    </>
  );
};
