import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../components/GlobalStyle'
import { theme } from '../config/constants'
import { MainContainer, ContentContainer } from '../components/Containers'
import { DynamicText } from '../components/Shared'
import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
import SideBar from '../components/SideBar'
import TypeWriter from '../components/TypeWriter'
import Terminal from '../components/Terminal'
import ProjectCard from '../components/ProjectCard'
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer'


const Home = () => {
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
        <TypeWriter anchorId="About" text="Adam Nguyen" />
        <ContentContainer>
          <DynamicText>
            Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties. When I learned CSS back in the years, there wasn’t a straightforward guide or way to learn how to use colors in CSS.

            I decided to write about colors and how to use them in CSS. In this article, I will explain color types, specific keywords, and when to use which along with use-cases and examples. Disclaimer: this is not an article about color theory.
            </DynamicText>
          <Terminal />
        </ContentContainer>
        <TypeWriter anchorId="Projects" text="Projects" />
        <ContentContainer>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ContentContainer>
        <TypeWriter anchorId="Contact" text="Contact Me" />
        <ContentContainer>
          <ContactCard />
        </ContentContainer>
      </MainContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default Home