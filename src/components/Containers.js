import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';


export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  padding: 0 20px 0 0;

  ${breakpoint('sm')`
    align-items: center;
  `}

`

export const ContentContainer = styled.div`
  
  margin: 0 0 0 10px;
  min-width: 0;
  max-width: 920px;
  padding: 0 0 0 25px;

  ${breakpoint('sm')`
    margin: 0 30px;
    min-width: 355px;
    padding: 0 0 0 25px;
  `}

  ${breakpoint('md')`
    margin: 16px 150px 60px 150px;
    padding: 0;
    min-width: 0;
  `}
`