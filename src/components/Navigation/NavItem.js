import React from 'react'
import styled from 'styled-components'
import { analytics } from '../../firebase'

const Border = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.accentText};
  position: absolute;
  top: 0;
  width: 0;
  transition: width 0.1s ease-out;
`

const Anchor = styled.a`
  font-size: 1.125rem;
  padding: 11px 32px;
  text-decoration: none;
  color: inherit;
`

const Item = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  list-style: none;
  &:hover > ${Border} {
    width: 100%;
    transition: width 0.2s ease-out;
  }
  &:hover > ${Anchor} {
    color: ${({ theme }) => theme.colors.accentText};
  }
`

const NavItem = ({ text }) => {
  const navClickHandler = e => {
    analytics.logEvent('search', { search_term: text })
  }
  return (
    <Item>
      <Border />
      <Anchor href={`#${text}`} onClick={navClickHandler} data-anchor={text}>
        {text}
      </Anchor>
    </Item>
  )
}

export default NavItem