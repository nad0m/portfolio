import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ data }) => {
  
  const list = data.map((project) => {
    return <ProjectCard key={project.title} project={project} />
  });

  return (
    <div>
      {list}
    </div>
  );
}

export default ProjectList;