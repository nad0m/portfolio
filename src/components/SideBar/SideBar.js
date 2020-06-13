import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import codeImg from './hero-image.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  overflow: visible;
  &::after {
    content: '';
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }

  ${breakpoint('md')`
    width: 150px;
  `}
`

const Image = styled.img`
  position: absolute;
  top: 0px;
  width: 38px;
  height: 38px;
  object-fit: contain;
  border-radius: 50%;
  padding: 10px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.background};

  ${breakpoint('md')`
    top: 15px;
    width: 100px;
    height: 100px;
    background-color: #ededed;
    border: 10px solid #fafafa;
    box-shadow: none;
  `}
`

const Text = styled.span`
  position: absolute;
  top: 10px;
  left: 48px;
  padding: 4px 6px;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  width: 140px;

  ${breakpoint('md')`
    top: 270px;
    left: auto;
    width: 175px;
    font-size: 20px;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
  `}
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