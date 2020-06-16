import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { UpArrowAlt } from '@styled-icons/boxicons-regular'
import analyticsClickHandler from '../../config/analyticsClickHandler';

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: #424242;
  z-index: 1;
  color: #ffffff;
`

const ScrollUpWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  height: 50%;
  width: 25px;

  &::after {
    content: '';
    border-right: 1px solid #3863d9;
  }

  ${breakpoint('md')`
    justify-content: center;
    width: 150px;
  `}
`

const ScrollUpButton = styled.a`
  position: absolute;
  bottom: -19px;
  right: -19px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #3863d9;

  ${breakpoint('md')`
    bottom: -19px;
    right: auto;
  `}

`


const Footer = () => {
  return (
    <Wrapper>
      <ScrollUpWrapper>
        <ScrollUpButton href="#top" onClick={e => analyticsClickHandler('Scroll top', 'top')} data-anchor="top" >
          <UpArrowAlt />
        </ScrollUpButton>
      </ScrollUpWrapper>
      <span>Made by Adam Nguyen © 2020</span>
    </Wrapper>
  )
}

export default Footer