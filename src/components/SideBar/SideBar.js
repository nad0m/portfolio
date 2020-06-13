import React from 'react'
import styled from 'styled-components'

import codeImg from './hero-image.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  left: 0;
  width: 150px;
  height: 100%;
  overflow: visible;
  &::after {
    content: '';
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`

const Image = styled.img`
  position: absolute;
  top: 15px;
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.imagePadding};
  border: 10px solid ${({ theme }) => theme.colors.imageBorder};
`

const Text = styled.span`
  position: absolute;
  top: 270px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 20px;
  width: 180px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
`



const SideBar = ({ text = 'Software Engineer' }) => {

  return (
    <Wrapper>
      <Image src={codeImg} />
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default SideBar