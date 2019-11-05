import React from 'react';
import '../styles/description.css';

const Description = ({ text }) => {

    return (
        <div className="title-description">
            {text}
        </div>
    );
}

export default Description;