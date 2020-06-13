import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import NavItem from './NavItem'

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 1.5em 0 0;
  right: 0;
  width: 100%;
  height: 100px;

  ${breakpoint('md')`
    margin: 3em 0 0;
  `}
`

const NavList = styled.ul`
  display: none;
  margin: 0 0 0 110px;

  ${breakpoint('md')`
    display: flex;
  `}
`

const Navigation = () => {
  return (
    <Wrapper>
      <NavList>
        <NavItem text="About" />
        <NavItem text="Projects" />
        <NavItem text="Contact" />
      </NavList>
    </Wrapper>
  )
}

export default Navigation