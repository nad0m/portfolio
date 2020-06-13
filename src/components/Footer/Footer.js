import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`

const ScrollUpWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  height: 50%;
  width: 150px;
  &::after {
    content: '';
    border-right: 1px solid ${({ theme }) => theme.colors.accentText};
  }
`

const Text = styled.span`
  
`

const Footer = () => {
  return (
    <Wrapper>
      <ScrollUpWrapper />
      <Text>Made by Adam Nguyen © 2020</Text>
    </Wrapper>
  )
}

export default Footer