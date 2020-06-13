import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: flex-start;
  padding: 60px;
`

const ImageWrapper = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
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
  title = 'Project title',
  desc = 'Project description',
  tags = [],
  demo = '',
  source = '',
  imageUrl
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="https://developers.google.com/youtube/images/youtube_home_page_player_api_720.png" />
      </ImageWrapper>
      <Content>
        <h3>{title}</h3>
        <p>{desc}</p>
      </Content>
    </Wrapper>
  )
}

export default ProjectCard