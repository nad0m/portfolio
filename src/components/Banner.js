import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { Sun, Moon } from '@styled-icons/boxicons-solid'

const Wrapper = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.07);
  color: ${({ theme }) => theme.colors.bannerText};
  z-index: 1;
  display: none;

  ${breakpoint('md')`
    display: flex;
  `}
`

const Toggle = styled.button`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50px;
  height: 24px;
  border-radius: 30px;
  background-color: #424242;
  color: #ffd500;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    > div {
      -webkit-box-shadow: 0px 0px 2px 3px rgba(7,194,219,1);
      -moz-box-shadow: 0px 0px 2px 3px rgba(7,194,219,1);
      box-shadow: 0px 0px 2px 3px rgba(7,194,219,1);
    }
  }
`

const Switch = styled.div`
  position: absolute;
  right: ${({ isDarkMode }) => isDarkMode ? '0px' : '27px'};
  width: 22px;
  height: 22px;
  background-color: #fafafa;
  border-radius: 50%;
  box-sizing: border-box;
  -webkit-transtition: right .1s ease-in-out;
  transition: right .1s ease-in-out;
`

const Banner = ({ text = 'Banner text here', isDarkMode, setIsDarkMode }) => {
  return (
    <Wrapper>
      {text}
      <Toggle onClick={e => setIsDarkMode(!isDarkMode)}>
        <Switch isDarkMode={isDarkMode} />
        <Moon size="16" />
        <Sun size="16" />
      </Toggle>
    </Wrapper>
  )
}

export default Banner