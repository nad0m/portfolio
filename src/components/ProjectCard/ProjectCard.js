import React, { useRef } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import useLazyImg from 'react-use-lazy-img'

import TagList from './TagList'
import ButtonGroup from './ButtonGroup'
import fallbackImg from '../../assets/placeholder.jpg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0 0;
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
  padding: 15px;

  > * {
    margin: 10px 0;
  }

  > p {
    min-height: 60px;
    line-height: 1.4;
  }

  ${breakpoint('md')`
      padding: 30px;

      > p {
        min-height: 110px;
      }
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
    padding-bottom: 50%;
  }
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 0;
  object-fit: cover;

  ${breakpoint('lg')`
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top-right-radius: 0;
  `}

`

const ProjectCard = ({
  title = 'Project title',
  description = 'Project description',
  skills = [],
  links = {},
  image = ''
}) => {
  const imgElement = useRef(null)
  const { imgSrc, onError } = useLazyImg(image, fallbackImg, imgElement)
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imgSrc} ref={imgElement} onError={onError} />
      </ImageWrapper>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <TagList tags={skills} />
        <ButtonGroup { ...links }/>
      </Content>
    </Wrapper>
  )
}

export default ProjectCard