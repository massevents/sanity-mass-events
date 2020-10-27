import * as React from "react";
import client from "../../../../client";

// Components
import { MaskDefault } from "../../../shared/Masks";
import { Title } from "../../../shared/Title/Component";

// Enums
import * as TitleEnum from "../../../shared/Title/Enums";
import * as HeadingEnum from "../../../shared/Heading/Enums";

// Interfaces
import { IProps } from "./Interfaces";

// Styled
import * as Styled from "./Style";

// Sanity
import imageUrlBuilder from "@sanity/image-url";

export const JumboPhoto: React.FC<IProps> = ({
  bgImage,
  className,
  headingTitle,
  headingSubTitle,
  mediaQueries,
}) => {

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }
  const image = (typeof bgImage === 'string') ? bgImage : urlFor(bgImage).width(1200).url();

  return(
  <section className={className}>
    <Styled.PhotoContainer>
      <Styled.Photo bgImage={image!}>
        {mediaQueries.isTabletPortrait && (
          <Styled.Section>
            <Title
              size={TitleEnum.Size.big}
              color={HeadingEnum.Color.light}
              heading={headingTitle || "Fill in a header"}
              subheading={headingSubTitle || "Fill in a subtitle"}
            />
          </Styled.Section>
        )}
      </Styled.Photo>
      {mediaQueries.isTabletPortrait && <MaskDefault />}
    </Styled.PhotoContainer>
    {!mediaQueries.isTabletPortrait && (
      <Styled.SectionRelative>
        <Title
          size={TitleEnum.Size.big}
          color={HeadingEnum.Color.dark}
          heading={headingTitle || "Fill in a header"}
          subheading={headingSubTitle || "Fill in a subtitle"}
        />
      </Styled.SectionRelative>
    )}
  </section>
);}

export default JumboPhoto;
