import React from 'react'
import styled, { keyframes } from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 92%;
  align-self: flex-start;
  margin: 60px 0 0 30px;

  ${breakpoint('sm')`
    margin: 60px 0 0 25px;
    justify-content: center;
    align-self: center;
    > h1 {
      font-size: 2em;
    }
    `}
  ${breakpoint('md')`
    margin: 0 0 0 30px;
  `}
`
const HeaderWrapper = styled.div`
  color: ${({ theme }) => theme.colors.accentText};
`

const typing = keyframes`
  from { width: 5% }
  to { width: 100% }
`

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #3863d9 }
`

const Header = styled.h1`
  overflow: hidden;
  border-right: .15em solid ${({ theme }) => theme.colors.accentText};
  white-space: nowrap;
  letter-spacing: .15em;
  font-size: 1.5em;
  animation: 
    ${typing} 2s steps(30, end),
    ${blinkCaret} .75s step-end infinite;

    &::before {
      content: "> "
    }

  ${breakpoint('sm')`
    font-size: 2em;
  `}
`

const TypeWriter = ({ text = 'Your name here' }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>
          {text}
        </Header>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default TypeWriter