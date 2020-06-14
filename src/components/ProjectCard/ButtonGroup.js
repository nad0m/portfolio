import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { LinkExternal, GitBranch } from '@styled-icons/boxicons-regular'

const Wrapper = styled.div`
  display: flex;
  font-size: 10px;

  > a {
    min-width: 110px;
  }

  ${breakpoint('md')`
    font-size: 14px;
    > a {
      min-width: 132px;
    }
  `}
`

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 3px;
  padding: 8px 16px;
  background-color: ${({ background, theme }) => background || theme.colors.demoButton};
  color: ${({ background, theme }) => background ? '#ffffff' : theme.colors.demoText};
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  box-sizing: border-box;
  > svg {
    margin: 0 0 0 5px;
  }

  &:hover {
    opacity: .9;
  }
`

const ButtonGroup = ({ demo = '#', source = '#' }) => {
  return (
    <Wrapper>
      <Button href={source}>
        Live Demo
        <LinkExternal size="14" />
      </Button>
      <Button background="#1b1c1d" href={demo}>
        View Source
      <GitBranch size="14" />
      </Button>
    </Wrapper>
  )
}

export default ButtonGroup