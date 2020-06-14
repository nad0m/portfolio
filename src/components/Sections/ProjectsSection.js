import React from 'react'

import TypeWriter from '../TypeWriter'
import { ContentContainer } from '../Containers'
import ProjectCard from '../ProjectCard'

const ProjectsSection = ({ navId, sectionTitle, projectList }) => {
  return (
    <>
      <TypeWriter anchorId={navId} text={sectionTitle} />
      <ContentContainer>
        {projectList.map(project => <ProjectCard { ...project } key={project.title} />)}
      </ContentContainer>
    </>
  )
}

export default ProjectsSection