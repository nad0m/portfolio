import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import NavItem from './NavItem'

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 1.5em 0 0;
  right: 0;
  width: 100%;
  height: 0;

  ${breakpoint('md')`
    margin: 3em 0 0;
    height: 100px;
  `}
`

const NavList = styled.ul`
  display: none;
  margin: 0 0 0 110px;

  ${breakpoint('md')`
    display: flex;
  `}
`

const Navigation = ({ fields = [] }) => {
  return (
    <Wrapper>
      <NavList>
        {fields.map((field, key) => <NavItem text={field} key={key} />)}
      </NavList>
    </Wrapper>
  )
}

export default Navigation