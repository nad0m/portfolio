import React from 'react';
import '../styles/typewriter.css';

const MainTitle = ({ text }) => {

    return (
        <div className="typewriter-body">
           <div className="typewriter">
                <h1>> {text}</h1>
            </div> 
        </div>
    );
}

export default MainTitle;