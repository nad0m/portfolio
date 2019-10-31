import React from 'react';
import { Image, Item } from 'semantic-ui-react';
import ProjectCard from './ProjectCard';

const ProjectList = () => (
  <Item.Group divided>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
  </Item.Group>
)

export default ProjectList;