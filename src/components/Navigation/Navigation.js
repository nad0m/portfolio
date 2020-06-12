import React from 'react'
import styled from 'styled-components'

import NavItem from './NavItem'

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 3em 0;
  right: 0;
  width: 100%;
  height: 100px;
`

const NavList = styled.ul`
  display: flex;
  margin: 0 0 0 110px;
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