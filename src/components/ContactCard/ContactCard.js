import React, { useRef } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import useLazyImg from 'react-use-lazy-img'

import fallbackImg from '../../assets/placeholder.jpg'
import ButtonGroup from './ButtonGroup'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-width: 0;

  ${breakpoint('md')`
    margin: 25px 0 0 10px;
  `}

  ${breakpoint('lg')`
    min-width: 800px;
    flex-direction: row;
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
  border-top-right-radius: 3px;
  border-bottom-left-radius: 0;
  object-fit: cover;

  ${breakpoint('lg')`
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top-right-radius: 0;
  `}
`

const ContactCard = ({
  title = 'Your name here',
  desc = 'Contact me here',
  links = {},
  avatar = ""
}) => {
  const imgElement = useRef(null)
  const { imgSrc, onError } = useLazyImg(avatar, fallbackImg, imgElement)
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imgSrc} ref={imgElement} onError={onError} />
      </ImageWrapper>
      <Content>
        <h3>{title}</h3>
        <p>{desc}</p>
        <ButtonGroup links={links}/>
      </Content>
    </Wrapper>
  )
}

export default ContactCard