import React from 'react';
import ProjectList from './ProjectList';
import Header from './Header';
import MainTitle from './MainTitle';
import Description from './Description';
import Terminal from './Terminal';
import SectionHeader from './SectionHeader';

const App = () => {
    return (
        <div className="ui container">
            <Header />
            <MainTitle />
            <Description />
            <Terminal />
            <SectionHeader />
            <ProjectList />
        </div>
    );
}

export default App;