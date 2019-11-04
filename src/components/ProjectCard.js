import React from 'react';
import { Icon, Item, Label } from 'semantic-ui-react';
import '../styles/colors.css';
import '../styles/projectcard.css';

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
            <div className="items">
              <div className="tag-items">
                <Label style={{margin:'5px'}}>Limited</Label>
                <Label style={{margin:'5px'}}>HTML</Label>
                <Label style={{margin:'5px'}}>Limited</Label>
                <Label style={{margin:'5px'}}>HTML</Label>
                <Label style={{margin:'5px'}}>Limited</Label>
                <Label style={{margin:'5px'}}>HTML</Label>

              </div>
              <div className="button-items">
                <button className='ui dracula button' style={{margin:'5px'}}>
                  <Icon name='window maximize outline' />
                  Live Demo
                </button>
                <button className='ui black button' style={{margin:'5px'}}>
                  <Icon name='code branch' />
                  View Source
                </button>
              </div>
            </div>
          </Item.Extra>
        </Item.Content>
      </Item>  
    </Item.Group>
  </div>
  
    
);

export default ProjectCard;