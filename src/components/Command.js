import React from 'react';
import pdf from '../data/adamnguyen_resume.pdf';

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

    console.log(pdf);
    if (keys[0] === 'resume') {
        return <a href={pdf} target="_blank" rel="noopener noreferrer" key={values[0]}>{values[0]}</a>
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

const Command = ({ input, output }) => {
    //console.log(parseOutput(output));
    return (
        <div style={{margin: '15px'}}>
            <div>{input}</div>
            <div style={{color: '#00f383'}}>{parseOutput(output)}</div>
        </div>
    );
}

export default Command;