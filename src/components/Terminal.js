import React from 'react';
import '../styles/terminal.css';

const Terminal = () => {

    return (
        <div className="terminal-container">
            <div className="window-container">
                <div className="window-controls">
                    <button className="window-controls-btn close-btn"></button>
                    <button className="window-controls-btn minimize-btn"></button>
                    <button className="window-controls-btn expand-btn"></button>
                </div>
                <div className="window-content">
                    <div>> Hello world</div>
                    <div>> Hello world</div>
                    <div>> Hello world</div>
                    <div>> Hello world</div>
                    <div>> Hello world</div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;