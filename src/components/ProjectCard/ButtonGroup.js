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

const DisabledButton = styled(Button)`
  background-color: #e8e8e8;
  box-shadow: none;
  color: gray;
  opacity: .4;
  cursor: not-allowed;

  &:hover {
    opacity: .4;
  }
`

const FinalButton = (props) => {

  return props.hasLink ? (
    <Button { ...props }>
      {props.children}
    </Button>
  ) : (
    <DisabledButton>
      {props.children}
    </DisabledButton>
  )
}

const ButtonGroup = ({ demo = '', source = '' }) => {
  return (
    <Wrapper>
      <FinalButton href={demo} hasLink={!!demo} target="_blank" rel="noopener noreferrer">
        Live Demo
        <LinkExternal size="14" />
      </FinalButton>
      <FinalButton background="#1b1c1d" href={source} hasLink={!!source} target="_blank" rel="noopener noreferrer">
        View Source
        <GitBranch size="14" />
      </FinalButton>
    </Wrapper>
  )
}

export default ButtonGroup