// Base
import React from "react";
const BlockContent = require("@sanity/block-content-to-react");

// Components
import { Title } from "../../shared/Title/Component";

// Interface
import { IProps } from "./Interfaces";

// Style
import * as Styled from "./Style";
import { SectionDefault } from "../../shared/SectionDefault/Component";

const InfoContent = (props:IProps) => {
  const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  return (
    <SectionDefault>
      <Styled.Container>
        <Title heading={props.title} subheading={props.label} />
      </Styled.Container>
      <Styled.Container>
        <Styled.Section>
          <BlockContent blocks={props.leftContent} serializers={serializers} />
        </Styled.Section>
        {props.rightContent && (
        <Styled.Section>
        <BlockContent blocks={props.rightContent} serializers={serializers} />
        </Styled.Section>
        )}
      </Styled.Container>
    </SectionDefault>
  );
};

export default InfoContent;
