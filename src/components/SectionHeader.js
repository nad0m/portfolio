import React from 'react';
import '../styles/sections.css';
import '../styles/colors.css';


const SectionHeader = ({ iconName, title }) => {

    const icon = (iconName) => {
        switch (iconName) {
            case 'folder':
                return <i className="folder open outline dracula icon"></i>;
            case 'envelope':
                return <i className="envelope outline dracula icon"></i>
            default: 
                break;
        }
        return <i className="question circle icon"></i>;
    }

    return (
        <div className="section-title">
            <h2 className="ui icon header">
                {icon(iconName)}
                <div className="content dracula">
                    {title}
                </div>
            </h2>
        </div>
    );
}

export default SectionHeader;