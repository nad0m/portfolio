import React from 'react';
import '../styles/header.scss';

const onClickHandler = (e) => {
    if (e.target.innerText === 'Projects') {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }

    if (e.target.innerText === 'Contact') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
}
const Header = () => {
    return (
            <div id="tabs">
                <div className="tab">
                    <span className="hover hover-1" onClick={onClickHandler}>
                        Projects
                    </span>
                </div>
                <div className="tab">
                    <span className="hover hover-1" onClick={onClickHandler}>
                        Contact
                    </span>
                </div>
            </div>
    );
}

export default Header;