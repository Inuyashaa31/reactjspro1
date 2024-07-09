import React from 'react';

const ResumeDownloadButton = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1wwx5tjFM_LQGRaSpck9Uk0sWQtD8euu4/view?usp=sharing'; 

    return (
        <div>
        
        <div className='flex items-center justify-center gap-10 px-10 py-16'>
            <div className='text-secondary text-semibold'>
                download My Resume:
            </div>
            <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'onClick={()=> window.open(resumeUrl)}>
            Download Resume
        </button>
        </div>
        </div>
    );
};

export default ResumeDownloadButton;
