import styled from 'styled-components'


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const ContentContainer = styled.div`
  border: 1px solid blue;
  position: relative;
  margin: 16px 15%;
  max-width: 720px;
  > p {
    line-height: 1.5;
  }
`