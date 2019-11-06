import React from 'react';
import ProjectList from './ProjectList';
import Header from './Header';
import MainTitle from './MainTitle';
import Description from './Description';
import Terminal from './Terminal';
import SectionHeader from './SectionHeader';
import Contact from './Contact';
import Footer from './Footer';
import config from '../data/config.json';

const App = () => {
    const { profile, projects } = config;

    return (
        <div className="ui container">
            <Header />
            <MainTitle text={profile.name}/>
            <Description text={profile.intro}/>
            <Terminal data={profile.details} />
            <SectionHeader id="projects" title="Projects" iconName="folder" />
            <ProjectList data={projects} />
            <SectionHeader id="contact" title="Contact" iconName="envelope" />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;