import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
  animation: 
    ${typing} 2s steps(30, end),
    ${blinkCaret} .75s step-end infinite;

    &::before {
      content: "> "
    }
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