import React from 'react';
// import { FormattedMessage } from 'react-intl';
import ProjectSlider from './ProjectSlider';

import { ProjectContainer, ProjectInfo, TitleContainer } from '../styles/components/Projects';

export default function Projects() {
  return (
      <ProjectContainer>
        <TitleContainer>
          <h1>
            {/* <FormattedMessage id="projects.header" defaultMessage="Projetos" /> */}
            Projetos
          </h1>
        </TitleContainer>
        <ProjectInfo>
          <ProjectSlider />
        </ProjectInfo>
      </ProjectContainer>
  );
}