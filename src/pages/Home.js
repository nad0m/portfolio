import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import { theme } from '../config/constants'
import { MainContainer } from '../components/Containers'
import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import { AboutSection, ProjectsSection, ContactSection } from '../components/Sections'


const Home = ({ data }) => {
  const { about = {}, projects = {}, contact = {} } = data
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(`a[name=${anchor.dataset.anchor}]`).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? theme.darkMode : theme.lightMode}>
      <GlobalStyle />
      <Banner isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <MainContainer>
        <a name="top" />
        <SideBar />
        <Navigation fields={['About', 'Projects', 'Contact']} />
        <AboutSection { ...about } />
        <ProjectsSection { ...projects} />
        <ContactSection { ...contact } />
      </MainContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default Home