import React from 'react';
import { Icon, Item, Label } from 'semantic-ui-react';
import '../styles/colors.css';
import '../styles/projectcard.css';
import imageFactory from '../images/imageFactory';

const getButton = (type, url) => {
  const text = type === 'demo' ? 'Live Demo' : 'View Source';

  if (!url) {
    return (
      <button className='ui button disabled' style={{margin:'5px'}}>
        <Icon name='window maximize outline' />
        {text}
      </button>
    );
  }

  if (type === 'demo') {
    return (
      <button className='ui dracula button' onClick={() => onLinkClick(url)} style={{margin:'5px'}}>
        <Icon name='window maximize outline' />
        {text}
      </button>
    );
  }

  return (
    <button className='ui black button' onClick={() => onLinkClick(url)} style={{margin:'5px'}}>
      <Icon name='code branch' />
      {text}
    </button>
  );

}

const getTags = (tags) => {

  const skills = tags.map((tag) => {
    return (
      <Label key={tag} style={{margin:'5px'}}>{tag}</Label>
    );
  });
  
  return skills;
}

const onLinkClick = (url) => {
  window.open(url, "_blank");
}

const ProjectCard = (props) => {
  const { title, type, description, skills, image, links } = props.project;

  return (
    <div style={{padding: '.5rem'}}>
      <Item.Group className="ui segment">
        <Item>
          <Item.Image src={imageFactory(image)} />
          <Item.Content>
            <Item.Header as='a'>{title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{type}</span>
            </Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra>
              <div className="items">
                <div className="tag-items">
                  {getTags(skills)}
                </div>
                <div className="button-items">
                  {getButton('demo', links.demo)}
                  {getButton('source', links.source)}
                </div>
              </div>
            </Item.Extra>
          </Item.Content>
        </Item>  
      </Item.Group>
    </div>   
  )
};

export default ProjectCard;