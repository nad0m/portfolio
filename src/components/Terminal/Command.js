import React from 'react'
import styled from 'styled-components'

const parseOutput = (val) => {

    if (typeof val === 'object') {
        if (Array.isArray(val)) {
            if (typeof val[0] === 'object') {
                const objects = [];
                for (let i = 0; i < val.length; i++) {
                    objects.push('"');
                    objects.push(parseObject(val[i]));
                    objects.push('"');

                    if (i !== val.length - 1)
                        objects.push(", ");
                }
                return ["[", ...objects, "]"];
            }
            return toArray(val);
        }
        return ['"', parseObject(val), '"'];
    }

    return `"${val}"`;
}

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

const Command = ({ input, output }) => {
    return (
        <Wrapper>
            <Input>{input}</Input>
            <Output>{parseOutput(output)}</Output>
        </Wrapper>
    );
}

export default Command;