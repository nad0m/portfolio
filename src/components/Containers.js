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
  margin: 16px 50px 60px;
  min-width: 0;
  max-width: 720px;
  padding: 0 0 0 25px;

  ${breakpoint('sm')`
    min-width: 355px;
  `}

  ${breakpoint('md')`
    margin: 16px 150px 60px 200px;
    padding: 0;
    min-width: 0;
  `}
`