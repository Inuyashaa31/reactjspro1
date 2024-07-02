import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './about'
import Aboutimg from './aboutimg'
import Skills from './skills'
import End from './ending'

function Home(){
  return (
    <div>
      <Header />
      <div className='bg-primary px-40 sm:px-5 '>
      
      
      <Intro/>

      <About/>
      </div>
      <Aboutimg />
      <div className='bg-primary px-40'>
        <Skills/>
      </div>
      <End />
    </div>
  )
}

export default Home
