import React from 'react';
import styled, { keyframes } from 'styled-components'

import Command from './Command'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
`

const Window = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #bbb;
  background: #1e1f29;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ButtonsContainer = styled.div`
  display: flex;
  padding: 5px;
  background: linear-gradient(rgb(226, 224, 226), rgb(199, 198, 200));
`

const WindowContent = styled.div`
  display: flex;
  padding: 0 20px 20px;
  flex-direction: column;
  flex: 0 0 95%;
  background: #1e1f29;
  color: #fff;
`

const TypeWriterBody = styled.div`
  margin: 15px;
`

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #fff }
`

const TypeWriter = styled.div`
  display: inline;
  color: #fff;
  font-family: 'Monaco', Consolas, 'Lucida Console', monospace;
  overflow: hidden;
  border-right: .50em solid #fff;
  white-space: nowrap;
  letter-spacing: .50em; 
  animation: ${blinkCaret} .75s step-end infinite;

  &::before {
    content: ">"
  }
`

const Terminal = () => {
    return (
        <Wrapper>
            <Window>
                <ButtonsContainer>
                    hello
                </ButtonsContainer>
                <WindowContent>
                    <TypeWriterBody>
                        <Command input="Input" output="Output" />
                        <Command input="Input" output="Output" />
                        <Command input="Input" output="Output" />
                        <Command input="Input" output="Output" />
                        <Command input="Input" output="Output" />
                        <TypeWriter />    
                    </TypeWriterBody>
                </WindowContent>
            </Window>
        </Wrapper>
    )
}

export default Terminal;