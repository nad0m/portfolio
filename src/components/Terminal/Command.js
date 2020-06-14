import React from 'react'
import styled from 'styled-components'

const parseObject = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    if (keys[0] === 'resume') {
        return <a href='#' target="_blank" rel="noopener noreferrer" key={values[0]}>{values[0]}</a>
    }

    return <a href={values[0]} target="_blank" rel="noopener noreferrer" key={keys[0]}>{keys[0]}</a>
}

const toArray = (arr) => {

    const str = arr.reduce((acc, item) => {
        if (acc.length === 0)
            return `"${item}"`;

        return `${acc}, "${item}"`;
    }, "");

    return `[${str}]`
}

const parseLink = ({ text, url }) => {
    return <a href={text === 'resume' ? '#' : url} target="_blank" rel="noopener noreferrer">{text}</a>
}

const parseContact = (result = []) => {
    const objects = []
    const links = result.map(res => parseLink(res))

    for (let i = 0; i < links.length; i++) {
        objects.push('"');
        objects.push(links[i]);
        objects.push('"');

        if (i !== links.length - 1)
            objects.push(", ");
    }
    return ["[", ...objects, "]"];
}

const sanitizeOutput = ({ result }) => {
    if (Array.isArray(result) && typeof result[0] === 'object') {
        return parseContact(result)
    } 
    else if (Array.isArray(result)) {
        return toArray(result)
    }

    return `"${result}"`
}


const Wrapper = styled.div`
  margin: 0 0 30px;
`

const Input = styled.div`
  &::before {
    content: ">";
    margin: 0 5px 0 0;
    font-family: 'Rubik', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`

const Output = styled.div`
  color: #00f383;
  &::before {
    content: "";
    margin: 0 0 0 1em;
  }
`

const Command = ({ objectName, command }) => {
    return (
        <Wrapper>
            <Input>{`${objectName}.${command.property}`}</Input>
            <Output>{sanitizeOutput(command)}</Output>
        </Wrapper>
    );
}

export default Command;