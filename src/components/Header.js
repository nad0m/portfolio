import React from 'react';
import '../styles/header.scss';


const Header = () => {
    return (
            <div id="tabs">
                <div className="tab">
                    <span className="hover hover-1">
                        Projects
                    </span>
                </div>
                <div className="tab">
                    <span className="hover hover-1">
                        Contact
                    </span>
                </div>
            </div>
    );
}

export default Header;