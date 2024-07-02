import React from 'react'

function Aboutimg() {
  return (
    <div>
        <div className="flex w-full items-center">
                <div className="h-[45vh] w-1/2">
                    <dotlottie-player src="https://lottie.host/dc1a027d-ca29-48e5-b79c-38b8396b082a/fVyS5ocu8F.json" 
                    background="transparent" 
                    speed="1" 
                    loop 
                    autoplay>
                        
                    </dotlottie-player>
                </div>

                <div className='text-black flex flex-col gap-5 w-1/2'>
                    <p>
                    Hello! I’m Mohit Rathod, currently pursuing my engineering degree at SAKEC with a specialization in Information Technology. I have a passion for exploring new places, which fuels my curiosity and broadens my perspective. Alongside my studies, I am deeply engaged in mastering MERN Stack web development. This comprehensive technology stack—MongoDB, Express.js, React.js, and Node.js—has captivated my interest with its versatility and practical applications. Through hands-on projects and continuous learning, I am honing my skills to contribute effectively in the dynamic field of IT.
                    </p>
                </div>
            </div>
        

    </div>
  )
}

export default Aboutimg
 