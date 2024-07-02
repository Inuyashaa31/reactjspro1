import React from 'react'

function Skills() {
    const skills = [
        "DSA",
        "Python",
        "C",
        "ReactJS",
        "MongoDB",
        "Flutter",
        "Firebase"
    ];
  
    return (
        <div className='py-5 gap-10 h-[65vh]'>
            <h1 className='text-notso text-2xl'>
                Skills Set:
            </h1>
            <div className='flex flex-wrap gap-10'>
                {skills.map((skill, index) => (
                    <div className='border border-notso py-3 px-10 gap-5'>
                    <h1 key={index} className='text-notso'>{skill}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
