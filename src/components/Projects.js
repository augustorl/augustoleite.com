import React, { useContext } from 'react';
// import { FormattedMessage } from 'react-intl';
import ProjectSlider from './ProjectSlider';
import { Context } from '../components/Wrapper';
import { ProjectContainer, ProjectInfo, TitleContainer } from '../styles/components/Projects';

export default function Projects() {
  const context = useContext(Context);

  const translatedText = context.translation;

  return (
      <ProjectContainer>
        <TitleContainer>
          <h1>
            {translatedText.projectsHeader}
          </h1>
        </TitleContainer>
        <ProjectInfo>
          <ProjectSlider />
        </ProjectInfo>
      </ProjectContainer>
  );
}