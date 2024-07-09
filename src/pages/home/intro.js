import React from 'react'

function Intro() {
  const linkedinurl = "https://www.linkedin.com/in/mohit-rathod-130a04287/"
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-black text-1xl'> Hi, I Am</h1>
        
        <h1 className='text-8xl sm:text-3xl text-notso font-semibold'>
        Mohit Rathod
        </h1>
        <p className='text-secondary text-4xl sm:text-3xl'>
        Software Engineer,
        </p>
        
        <p className='text-black'>
        with the expertise in the Full stack development with Front-End and Back-End. Eager to apply my technical skills
        and contribute in the innovative projects for the same.
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'
            onClick={()=> window.open(linkedinurl)}>
            Get Started
        </button>
    </div>
  )
}

export default Intro
