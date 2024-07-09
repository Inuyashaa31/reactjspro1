import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './about'
import Skills from './skills'
import Experiences from './Experiences'
import Projects from './Projects'
import ResumeDownloadButton from './resume'
import Courses from './courses'
import Contact from './contact'

function Home(){
  return (
    <div>
      <Header />
      <div className='bg-primary px-40 sm:px-5 '>
      
      <Intro/>

      <About/>
      
      <Skills/>

      <Experiences/>

      <Projects/>

      <Courses/>

      <Contact/>

      <ResumeDownloadButton/>
      </div>
    </div>
      
    
  )
}

export default Home
