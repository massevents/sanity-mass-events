// Base
import React from "react";
import client from "../../../client";

// Interfaces
import { IProps } from "./Interfaces";

// Components
import { ProjectImage } from "../ProjectImage/Component";
import { Heading } from "../Heading/Component";
import { TiltDirection } from "../ProjectImage/Enums";
import { ButtonDefault } from "../Button/Component";

// Enums
import * as HeadingEnum from "../Heading/Enums";
import * as ColorEnum from "../../../enums/Color";
import { ImagePosition } from "./Enums";

// Styles
import * as Styled from "./Style";

// Sanity
import imageUrlBuilder from "@sanity/image-url";

export const ProjectBlockPoster = ({ imagePosition, data }: IProps) => {
  const builder = imageUrlBuilder(client);
  
  function urlFor(source: any) {
    return builder.image(source);
  }
  
  const [mediaUrl, setMediaUrl] = React.useState<string>(""); 

  React.useEffect(() => { 
    if (mediaUrl === '') {
        const res = urlFor(data && data.media!.posterSrc!).width(640).url();
        setMediaUrl( res ? res : '');
    }
  }, [urlFor]);

  return (
    data ? (
      <Styled.ProjectBlock data={data}>
        <Styled.Column>
          <ProjectImage imageSrc={mediaUrl!} format="poster" tiltDirection={TiltDirection[imagePosition]} />
        </Styled.Column>
        <Styled.Column>

          <Heading tag={HeadingEnum.Tag.h5} color={HeadingEnum.Color.primary}>
            {data.title!}
          </Heading>

          <ButtonDefault
            href={`project/${data.slug!.current!}`}
            color={ColorEnum.Color.light}
          >
            Lees meer
          </ButtonDefault>
        </Styled.Column>
      </Styled.ProjectBlock>
    ) : (<p>Loading..</p>)
  );
};
