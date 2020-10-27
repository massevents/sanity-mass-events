// Base
import React from "react";
import { withRouter } from "next/router";

const BlockContent = require("@sanity/block-content-to-react");
// Components
import { Title } from "../../shared/Title/Component";
import { SectionDefault } from "../../shared/SectionDefault/Component";

// Style
import * as Styled from "./Style";

const About: React.FC = (props: any) => {
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
      <React.Fragment>
        <Styled.Container>
          <Title heading={props.heading} subheading={props.label} />
        </Styled.Container>
        <Styled.Container>
          <Styled.Section>
          <BlockContent blocks={props.left_col_text} serializers={serializers} />
            </Styled.Section>
          <Styled.Section>
          <BlockContent blocks={props.right_col_text} serializers={serializers} />


          </Styled.Section>
        </Styled.Container>
        <Styled.Container>
          <Styled.Section>
            <blockquote>
              <h3>{props.quote}</h3>
            </blockquote>
          </Styled.Section>
        </Styled.Container>
      </React.Fragment>
    </SectionDefault>
  );
};

export default withRouter(About);
