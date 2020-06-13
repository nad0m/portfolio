import styled from 'styled-components'


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`


export const ContentContainer = styled.div`
  position: relative;
  margin: 16px 150px;
  max-width: 720px;
  > p {
    line-height: 1.5;
  }
`