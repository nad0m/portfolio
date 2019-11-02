import React from 'react';
import '../styles/header.scss';


const Header = () => {
    return (
        <div className="ui secondary menu" style={{marginTop: '20px'}}>
            <div id="tabs" className="right menu">
                <div className="item tab">
                    <span className="hover hover-1">
                        Projects
                    </span>
                </div>
                <div className="item tab">
                    <span className="hover hover-1">
                        Contact
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;