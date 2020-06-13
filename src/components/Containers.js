import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`


export const ContentContainer = styled.div`
  position: relative;
  margin: 16px 150px 60px;
  min-width: 355px;
  max-width: 720px;
  ${breakpoint('md')`
    min-width: 0;
  `}
`