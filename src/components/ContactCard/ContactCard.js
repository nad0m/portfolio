import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import ButtonGroup from './ButtonGroup'

const Wrapper = styled.div`
  flex-direction: column;
  margin: 20px 0;
  display: flex;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${breakpoint('lg')`
    flex-direction: row;
  `}

  ${breakpoint('md')`
    margin: 25px 0 0 10px;
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 9;
  align-items: flex-start;
  padding: 20px;

  > * {
    margin: 10px 0;
  }

  > p {
    min-height: 110px;
    line-height: 1.4;
  }

  ${breakpoint('md')`
    padding: 30px;
  `}

`

const ImageWrapper = styled.div`
  display: flex;
  flex: 7;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    padding-bottom: 65%;
  }
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  object-fit: cover;
`

const ProjectCard = ({
  title = 'Your name here',
  desc = 'Contact me here',
  email = '',
  linkedin = '',
  github = ''
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="https://avatars2.githubusercontent.com/u/20848851?s=400&v=4" />
      </ImageWrapper>
      <Content>
        <h3>{title}</h3>
        <p>I decwill explain color types, specific keywords, and when to use which along with use-cases and examples. Disclaimer: this is not an article about color theory.</p>
        <ButtonGroup links={{ email, linkedin, github }}/>
      </Content>
    </Wrapper>
  )
}

export default ProjectCard