import React from 'react';
import '../styles/terminal.css';

class Terminal extends React.Component {


    state = {
        clientWidth: null,
        clientHeight: null
    }

    onWindowResize = () => {
        const {clientWidth, clientHeight} = this.windowRef.current;
        this.setState({ clientWidth, clientHeight });
    }

    constructor(props) {
        super(props);
        this.windowRef = React.createRef();
        window.addEventListener('resize', this.onWindowResize);
    }

    componentDidMount() {
        this.onWindowResize();
    }

    render() {
        return (
            <div className="terminal-container" ref={this.windowRef}>
                <div className="window-container">
                    <div className="window-controls">
                        <button className="window-controls-btn close-btn"></button>
                        <button className="window-controls-btn minimize-btn"></button>
                        <button className="window-controls-btn expand-btn"></button>
    
                        <div className="window-description">Terminal -- {this.state.clientWidth}x{this.state.clientHeight}</div>
                    </div>
    
                    <div className="window-content">
                        <div>> Hello world</div>
                        <div>> Hello world</div>
                        <div>> Hello world</div>
                        <div>> Hello world</div>
                        <div>> Hello world</div>
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
}

export default Terminal;