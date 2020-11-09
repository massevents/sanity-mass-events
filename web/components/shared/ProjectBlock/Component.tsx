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
const BlockContent = require('@sanity/block-content-to-react')

// Enums
import * as HeadingEnum from "../Heading/Enums";
import * as ColorEnum from "../../../enums/Color";
import { ImagePosition } from "./Enums";

// Styles
import * as Styled from "./Style";

// Sanity
import imageUrlBuilder from "@sanity/image-url";

export const ProjectBlock = ({ imagePosition, data }: IProps) => {
  const builder = imageUrlBuilder(client);

  const serializers = {
    types: {
      code: (props:any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }
  
  function urlFor(source: any) {
    return builder.image(source);
  }
  
  const [mediaUrl, setMediaUrl] = React.useState<string>(""); 
  const [logoUrl, setLogoUrl] = React.useState<string>("");

  React.useEffect(() => {
    if (mediaUrl === '') {
        const res = urlFor(data && data.media!.imageSrc!).width(640).url();
        setMediaUrl( res ? res : '');

        const logoRes = urlFor(data && data.media!.logoSrc!).height(50).url();
        setLogoUrl( logoRes ? logoRes : '');
    }
  }, [urlFor]);

  imagePosition = imagePosition ? imagePosition : ImagePosition.left;

  const shortDesc = !data.snippetDesc && data.description && data.description.shortDescription && data.description.shortDescription[0] && data.description.shortDescription[0].children[0];

  return (
    data ? (
      <Styled.ProjectBlock imagePosition={imagePosition} data={data}>
        <Styled.Column imagePosition={imagePosition}>
          <ProjectImage imageSrc={mediaUrl!} tiltDirection={TiltDirection[imagePosition]} />
        </Styled.Column>
        <Styled.Column imagePosition={imagePosition}>
        { logoUrl && logoUrl !== "" && (<Styled.Image src={logoUrl!} alt={data.title!} /> ) }

          <Heading tag={HeadingEnum.Tag.h4} color={HeadingEnum.Color.primary}>
            {data.title!}
          </Heading>
          {data.snippetDesc && (<p>{ data.snipperDesc }</p>)}
          {!data.snippetDesc && (<p className="fallback_description">{ shortDesc && shortDesc.text }</p>)}

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
