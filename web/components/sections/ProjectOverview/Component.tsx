// Base
import React from "react";
import client from "../../../client";

// Components
import { ProjectBlock } from "../../shared/ProjectBlock/Component";
import { Title } from "../../shared/Title/Component";
import { ButtonDefault } from "../../shared/Button/Component";
// import { ProjectSquares } from '@components/organisms/ProjectSquares'

// Enums
import { ImagePosition } from "../../shared/ProjectBlock/Enums";
import * as ColorEnum from "../../../enums/Color";
import * as OverviewEnum from "./Enums";

// Interfaces
import { IProps } from "./Interfaces";

// Style
import * as Styled from "./Style";
const ProjectOverview = (props: IProps) => {
  const { overviewUrl, type, mediaQueries, headingTitle, headingSubTitle } = props;
  const [projectsData, setProjectsData] = React.useState<any>(null);
  const [pageUrl, setPageUrl] = React.useState<any>(null);

  async function fetchData(type:any) {
    const result = await client.fetch(`*[_type == "project"]|order(publishedAt desc)`);
    type === 'recent' ? setProjectsData(result.slice(0, 4)) : setProjectsData(result);
  }
  async function fetchSpecificData() {

    let data:any[] = [];
    type.projects &&
      type.projects.map((item: any) => {

        if (item._ref) {
          client
            .fetch(`*[_type == "project" && _id == "${item._ref}"]{...}`)
            .then((response: any) => {
              const [dataToReplace] = response;
              data.push(dataToReplace);

            });
        }
      });
      setProjectsData(data);
  }

  React.useEffect(() => {
    if (type.condition === "all" || type.condition === "recent") {
      projectsData === null && fetchData(type.condition);
    }
    if (type.condition === "projects") {
      projectsData === null && fetchSpecificData();
    }
  }, [fetchData, fetchSpecificData]);

  React.useEffect(() => {
    if (overviewUrl) {
      if (pageUrl === null) {
        client
          .fetch(`*[_type == "route" && _id == "${overviewUrl._ref}"]{...}`)
          .then((response: any) => {
            const [dataToSave] = response;
            setPageUrl(dataToSave);
          });
      }
    }
  }, [pageUrl, overviewUrl]);

  return (
    <Styled.Section>
      <Title heading={headingTitle} subheading={headingSubTitle} />
      <div>
        {projectsData &&
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
      </div>

      {(type.condition === OverviewEnum.Type.recent || type.condition === OverviewEnum.Type.projects) && (
        <Styled.ButtonContainer>
          <ButtonDefault
            href={`/${pageUrl && pageUrl.slug.current}`}
            color={ColorEnum.Color.primary}
          >
            Bekijk alle projecten
          </ButtonDefault>
        </Styled.ButtonContainer>
      )}
    </Styled.Section>
  );
};

export default ProjectOverview;
