import React from 'react';
import Command from './Command';
import '../styles/terminal.css';
import '../styles/typewriter.css';

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
        const { location, contact, resume, interests, education, skills } = this.props.data;

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
                        <Command input="> Adam.location" output={location} />
                        <Command input="> Adam.education" output={education} />
                        <Command input="> Adam.skills" output={skills} />
                        <Command input="> Adam.resume" output={resume} />
                        <Command input="> Adam.contacts" output={contact} />
                        <Command input="> Adam.interests" output={interests} />
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