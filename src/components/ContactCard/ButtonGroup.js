import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { Mail, SocialLinkedin, SocialGithub } from '@styled-icons/foundation'
import analyticsClickHandler from '../../config/analyticsClickHandler';

const Wrapper = styled.div`
  display: flex;
  font-size: 10px;

  > a {
    > span {
      display: none;
    }

    > svg {
      margin: 0;
    }
    min-width: 60px;
  }

  ${breakpoint('lg')`
    font-size: 14px;
    > a {
      > span {
        display: inline;
      }

      > svg {
        margin: 0 0 0 5px;
      }
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
  background-color: ${({ background, theme }) => background || theme.colors.accentText};
  color: #ffffff;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
  box-sizing: border-box;

  &:hover {
    opacity: .9;
  }
`

const ButtonGroup = ({ links: { email, linkedin, github } = {} }) => {
  return (
    <Wrapper>
      <Button href={email} onClick={e => analyticsClickHandler('Email_contact', email)} background="#dd4b39" target="_blank" rel="noopener noreferrer">
        <span>Email</span>
        <Mail size="16" />
      </Button>
      <Button href={linkedin} onClick={e => analyticsClickHandler('LinkedIn_contact', linkedin)} background="#1f88be" target="_blank" rel="noopener noreferrer">
        <span>LinkedIn</span>
      <SocialLinkedin size="16" />
      </Button>
      <Button href={github} onClick={e => analyticsClickHandler('GitHub_contact', github)} background="#1b1c1d" target="_blank" rel="noopener noreferrer">
        <span>GitHub</span>
      <SocialGithub size="16" />
      </Button>
    </Wrapper>
  )
}

export default ButtonGroup