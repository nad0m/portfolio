import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  padding: 16px;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.07);
  color: ${({ theme }) => theme.colors.bannerText};
  z-index: 1;
  display: none;

  ${breakpoint('md')`
    display: block;
  `}
`

const Banner = ({ text = 'Banner text here' }) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  )
}

export default Banner