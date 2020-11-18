// Base
import React from "react";
import client from "../../../client";

// Components
import { ProjectBlock } from "../../shared/ProjectBlock/Component";
import { ProjectBlockPoster } from "../../shared/ProjectBlockPoster/Component";

import { Title } from "../../shared/Title/Component";
import { ButtonDefault } from "../../shared/Button/Component";
// import { ProjectSquares } from '@components/organisms/ProjectSquares'

// Enums
import { ImagePosition } from "../../shared/ProjectBlock/Enums";
import * as ColorEnum from "../../../enums/Color";

// Interfaces
import { IProps } from "./Interfaces";

// Style
import * as Styled from "./Style";

const ProjectOverview = (props: IProps) => {
  const { button_enable, type, mediaQueries, headingTitle, headingSubTitle, format } = props;

  const [projectsData, setProjectsData] = React.useState<any>(null);
  const [pageUrl, setPageUrl] = React.useState<any>(null);

  async function fetchData(type: any) {
    const result = await client.fetch(`*[_type == "project"]|order(publishedAt desc)`);
    type === "recent" ? setProjectsData(result.slice(0, 4)) : setProjectsData(result);
  }

  async function fetchSpecificData() {
    let data: any[] = [];
    type.projects &&
      type.projects.map((item: any) => {
        if (item._ref) {
          client
            .fetch(`*[_type == "project" && _id == "${item._ref}"]{...}`)
            .then((response: any) => {
              const [dataToReplace] = response;
              data.push(dataToReplace);

              if (data.length === type.projects.length) {
                setProjectsData(data);
              }
            });
        }
      });
  }

  React.useEffect(() => {
    if (type.condition === "all" || type.condition === "recent") {
      projectsData === null && fetchData(type.condition);
    }
    if (type.condition === "projects") {
      projectsData === null && fetchSpecificData();
    }
  }, [type.projects]);

  React.useEffect(() => {
    if (
      button_enable &&
      button_enable.condition !== "button_object_no" &&
      button_enable.button_object &&
      button_enable.button_object.button_url
    ) {
      if (pageUrl === null) {
        client
          .fetch(
            `*[_type == "route" && _id == "${button_enable.button_object.button_url._ref}"]{...}`
          )
          .then((response: any) => {
            const [dataToSave] = response;
            setPageUrl(dataToSave);
          });
      }
    }
  }, [pageUrl, button_enable]);

  return (
    <Styled.Section>
      <Title heading={headingTitle} subheading={headingSubTitle} />
      <div>
        {type && type.projects && type.projects.length === 0 && (
          <p>Geen projecten gepland tot dusver!</p>
        )}

        {projectsData &&
          format !== "poster" &&
          projectsData.map((item: any, index: number) => {
            return (
              <ProjectBlock
                imagePosition={index % 2 === 0 ? ImagePosition.left : ImagePosition.right}
                key={`project-${index}`}
                data={item}
                mediaQueries={mediaQueries}
              />
            );
          })}

        {projectsData && format === "poster" && (
          <Styled.PosterWrapper>
            {projectsData.map((item: any, index: number) => {
              return (
                <ProjectBlockPoster
                  imagePosition={ImagePosition.right}
                  key={`project-${index}`}
                  data={item}
                  mediaQueries={mediaQueries}
                />
              );
            })}
          </Styled.PosterWrapper>
        )}
      </div>

      {pageUrl && (
        <Styled.ButtonContainer>
          <ButtonDefault
            href={`/${pageUrl && pageUrl.slug.current}`}
            color={ColorEnum.Color.primary}
          >
            {button_enable.button_object.button_label}
          </ButtonDefault>
        </Styled.ButtonContainer>
      )}
    </Styled.Section>
  );
};

export default ProjectOverview;
