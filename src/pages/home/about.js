import React from 'react'
import SectionTilte from '../../components/SectionTitle'

function About() {
    return (
        <div className='sm:flex-col'>
            <SectionTilte title="About Me" />

            <div className="flex w-full items-center sm:flex-col">
                <div className="h-[45vh] w-1/2 sm:w-full">
                    <dotlottie-player src="https://lottie.host/f034633f-6248-4945-9606-2e041f3c6b20/RZfMhiOSRg.json" 
                    background="transparent" 
                    speed="1" 
                    loop 
                    autoplay></dotlottie-player>
                </div>
            <div className="text-black flex flex-col gap-5 w-1/2 sm:w-full">
                <p>
                     Hello! I’m Mohit Rathod, currently pursuing my engineering degree at SAKEC with a specialization in Information Technology. I have a passion for exploring new places, which fuels my curiosity and broadens my perspective. Alongside my studies, I am deeply engaged in mastering MERN Stack web development. This comprehensive technology stack—MongoDB, Express.js, React.js, and Node.js—has captivated my interest with its versatility and practical applications. Through hands-on projects and continuous learning, I am honing my skills to contribute effectively in the dynamic field of IT.
                </p>
            </div>
                
            </div>
        </div>
        
    )
}

export default About
