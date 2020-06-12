import React from 'react';
import './terminal.css';
import './typewriter.css';

class Terminal extends React.Component {


    constructor(props) {
        super(props);
        window.addEventListener('resize', this.onWindowResize);
    }

    render() {

        return (
            <div className="terminal-container">
                <div className="window-container">
                    <div className="window-controls">
                        <button className="window-controls-btn close-btn"></button>
                        <button className="window-controls-btn minimize-btn"></button>
                        <button className="window-controls-btn expand-btn"></button>
    
                        <div className="window-description">Terminal</div>
                    </div>
    
                    <div className="window-content">
                        <div className="typewriter-body-span">
                            <div className="typewriter-span">
                                <span>> {}</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Terminal;