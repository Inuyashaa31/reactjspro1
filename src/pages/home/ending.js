import React from 'react';

function End() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="w-full flex justify-center items-center">
        <div className='h-1/4'>
          <dotlottie-player 
            src="https://lottie.host/ee36a728-632d-48f1-8e67-9addc72c6fe5/vc97ibjeVN.json" 
            background="transparent" 
            speed="1" 
            loop 
            autoplay>
          </dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default End;
