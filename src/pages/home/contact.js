import React from 'react'
import SectionTilte from '../../components/SectionTitle'

function Contact() {
    const intro = {
        Name: "Mohit Kiran Rathod",
        Age: "21",
        gender: "Male",
        Email: "mohit.rathod16848@gmail.com",
        Mobile: "9372880318",
        Country: "INDIA",
    };
  return (
    <div className='flex flex-row gap-28 sm:flex-col'>
      <div>
        <SectionTilte title="Contact ME" />
        <p className='text-xl py-10 sm:w-full sm:text-sm' >
          I'd love to stay in touch! Follow me on my social media channels and let's connect.
        </p>
        <div className='flex flex-row gap-10 sm:flex-col' >
          <div className='flex flex-col h-[45vh] gap-5 w-1/2 text-2xl sm:text-sm sm:w-full'>
            <h1 className='text-secondary '>{'{'}</h1>
            {Object.keys(intro).map((key) => (
              <h1 key={key} className='px-10 gap-y-10'>
                <span className='text-secondary'>{key} : </span>
                <span className='text-secondary'>{intro[key]}</span>
              </h1>
            ))}
            <h1 className='text-secondary'>{'}'}</h1>
          </div>
          <div className='h-[45vh] w-1/2 flex items-center justify-center sm:w-full'>
            <dotlottie-player 
              src="https://lottie.host/a27a252f-953b-44c0-a4de-d38099e72340/aoIOwdST3V.json" 
              background="transparent" 
              speed="1" 
              loop 
              autoplay 
              className="w-full h-full"
            ></dotlottie-player>
          </div>
        </div>
      </div>
      <div>
        {/* Additional content can go here */}
      </div>
    </div>
                )
}

export default Contact
