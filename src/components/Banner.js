import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { Sun, Moon } from '@styled-icons/boxicons-solid'
import { RightArrowAlt } from '@styled-icons/boxicons-regular'

const Wrapper = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.07);
  background-color: ${({ theme }) => theme.colors.bannerBackground};
  color: ${({ theme }) => theme.colors.bannerText};
  z-index: 1;
  display: none;

  > svg {
    margin: 0 5px;
  }

  ${breakpoint('md')`
    display: flex;
  `}
`

const Toggle = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
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
  right: ${({ isDarkMode }) => isDarkMode ? '1px' : '27px'};
  width: 22px;
  height: 22px;
  background-color: #fafafa;
  border-radius: 50%;
  box-sizing: border-box;
  -webkit-transtition: right .1s ease-in-out;
  transition: right .1s ease-in-out;
`

const MobileToggle = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #3863d9;
  border: none;
  outline: none;
  border-radius: 50%;
  color: #d9e2ec;
  right: 10px;
  top: 10px;
  z-index: 99;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(2,43,148,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(2,43,148,1);
  box-shadow: 0px 0px 5px 0px rgba(2,43,148,1);

  ${breakpoint('md')`
    display: none;
  `}
`

const Banner = ({ text = 'Hey! Toggle between light and dark themes over here', isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <Wrapper>
        {text}
        <RightArrowAlt size='24' />
        <Toggle onClick={e => setIsDarkMode(!isDarkMode)}>
          <Switch isDarkMode={isDarkMode} />
          <Moon size="16" />
          <Sun size="16" />
        </Toggle>
      </Wrapper>
      <MobileToggle onClick={e => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <Moon size="30" /> : <Sun size="30" />}
      </MobileToggle>
    </>
  )
}

export default Banner