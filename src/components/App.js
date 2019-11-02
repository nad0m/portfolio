import React from 'react';
import ProjectList from './ProjectList';
import Header from './Header';
import MainTitle from './MainTitle';
import Description from './Description';
import Terminal from './Terminal';
import SectionHeader from './SectionHeader';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
        <div className="ui container">
            <Header />
            <MainTitle />
            <Description />
            <Terminal />
            <SectionHeader title="Projects" iconName="folder" />
            <ProjectList />
            <SectionHeader title="Contact" iconName="envelope" />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;