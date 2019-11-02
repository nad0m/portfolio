import React from 'react';
import { Icon, Button, Item, Label } from 'semantic-ui-react';

const paragraph = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut 
enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.`

const ProjectCard = () => (
  <div style={{padding: '.5rem'}}>
    <Item.Group className="ui segment">
      <Item>
        <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
          <Item.Header as='a'>My Neighbor Totoro</Item.Header>
          <Item.Meta>
            <span className='cinema'>IFC Cinema</span>
          </Item.Meta>
          <Item.Description>{paragraph}</Item.Description>
          <Item.Extra>
            <Button className="primary" floated='right'>
              Live Demo
              <Icon name='right chevron' />
            </Button>
            <Button color='black' floated='right'>
              {`Source Code </>`}
            </Button>
            <Label>Limited</Label>
            <Label>HTML</Label>
          </Item.Extra>
        </Item.Content>
      </Item>  
    </Item.Group>
  </div>
  
    
);

export default ProjectCard;