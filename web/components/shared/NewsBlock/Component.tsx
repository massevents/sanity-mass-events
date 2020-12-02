// Base
import React from "react";
import client from "../../../client";

// Interfaces
import { IProps } from "./Interfaces";

// Components
import { NewsImage } from "../NewsImage/Component";
import { Heading } from "../Heading/Component";
import { TiltDirection } from "../NewsImage/Enums";
import { ButtonDefault } from "../Button/Component";

// Enums
import * as HeadingEnum from "../Heading/Enums";
import * as ColorEnum from "../../../enums/Color";
import { ImagePosition } from "./Enums";

// Styles
import * as Styled from "./Style";

// Sanity
import imageUrlBuilder from "@sanity/image-url";

export const NewsBlock = ({ imagePosition, data }: IProps) => {

  console.log(data);

  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  const [mediaUrl, setMediaUrl] = React.useState<string>("");
  const [logoUrl, setLogoUrl] = React.useState<string>("");

  React.useEffect(() => {
    if (mediaUrl === "") {
      const res = urlFor(data && data.media!.imageSrc!)
        .width(640)
        .url();
      setMediaUrl(res ? res : "");
    }
  }, [urlFor]);

  const shortDesc =
    data &&
    data.snippetDesc === undefined &&
    data.description &&
    data.description.shortDescription &&
    data.description.shortDescription[0] &&
    data.description.shortDescription[0].children[0];

  return data ? (
    <Styled.NewsBlock imagePosition={imagePosition || ImagePosition.left} data={data}>
      <Styled.Column imagePosition={imagePosition || ImagePosition.left}>
        <NewsImage
          imageSrc={mediaUrl!}
          format="newsblock"
          tiltDirection={TiltDirection[imagePosition || ImagePosition.left]}
        />
      </Styled.Column>
      <Styled.Column imagePosition={imagePosition || ImagePosition.left}>
        {logoUrl && logoUrl !== "" && <Styled.Image src={logoUrl!} alt={data.title!} />}

        <Heading tag={HeadingEnum.Tag.h4} color={HeadingEnum.Color.primary}>
          {data.title!}
        </Heading>
        {data.snippetDesc && <p>{data.snippetDesc}</p>}
        {!data.snippetDesc && <p className="fallback_description">{shortDesc && shortDesc.text}</p>}

        <ButtonDefault href={`news/${data.slug!.current!}`} color={ColorEnum.Color.light}>
          Lees meer
        </ButtonDefault>
      </Styled.Column>
    </Styled.NewsBlock>
  ) : (
    <p>Loading..</p>
  );
};
