import React from 'react'
import styled from 'styled-components'

import { Mail, SocialLinkedin, SocialGithub } from '@styled-icons/foundation'

const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
`

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 3px;
  padding: 8px 16px;
  background-color: ${({ background, theme }) => background || theme.colors.accentText};
  color: #ffffff;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 13px 0px rgba(120,120,120,1);
  -moz-box-shadow: 0px 2px 13px 0px rgba(120,120,120,1);
  box-shadow: 0px 2px 13px 0px rgba(120,120,120,1);
  box-sizing: border-box;
  min-width: 106px;
  > svg {
    margin: 0 0 0 5px;
  }

  &:hover {
    opacity: .9;
  }
`

const ButtonGroup = ({ links: { email, linkedin, github } = {} }) => {
  return (
    <Wrapper>
      <Button href={email} background="#dd4b39">
        Email
        <Mail size="16" />
      </Button>
      <Button href={linkedin} background="#1f88be">
        LinkedIn
      <SocialLinkedin size="16" />
      </Button>
      <Button href={github} background="#1b1c1d">
        GitHub
      <SocialGithub size="16" />
      </Button>
    </Wrapper>
  )
}

export default ButtonGroup