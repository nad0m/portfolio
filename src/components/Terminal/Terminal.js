import React from 'react';
import styled, { keyframes } from 'styled-components'

import Command from './Command'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  font-size: 14px;
`

const Window = styled.div`
  width: 100%;
  height: auto;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ButtonsContainer = styled.div`
  color: #000000;
  display: flex;
  padding: 5px;
  background: linear-gradient(rgb(226, 224, 226), rgb(199, 198, 200));
`

const WindowContent = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  flex: 0 0 95%;
  background: #292d3e;
  color: rgb(130, 170, 255);
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
  overflow: hidden;
  border-right: .50em solid #fff;
  white-space: nowrap;
  letter-spacing: .50em; 
  animation: ${blinkCaret} .75s step-end infinite;

  &::before {
    content: ">";
    font-family: 'Rubik', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`

const Button = styled.button`
    position: relative;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0;
    margin: 3.5px;
    background: ${({ color }) => color};
`

const WindowHeader = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`

const Terminal = ({ objectName, commands }) => {
  return (
    <Wrapper className="code">
      <Window>
        <ButtonsContainer>
          <Button color="#e34545" />
          <Button color="#e0b228" />
          <Button color="#42c933" />
          <WindowHeader>
            Terminal
                    </WindowHeader>
        </ButtonsContainer>
        <WindowContent>
          <TypeWriterBody>
            {commands.map(command => (
              <Command 
                objectName={objectName} 
                command={command}
                key={command.property} 
              />
            ))}
            <TypeWriter />
          </TypeWriterBody>
        </WindowContent>
      </Window>
    </Wrapper>
  )
}

export default Terminal;