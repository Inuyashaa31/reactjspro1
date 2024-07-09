import React from 'react'
import SectionTilte from '../../components/SectionTitle';

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
        <div className='py-10 gap-7 h-[25vh] sm:h-[55vh]'>
            <SectionTilte title="Skills set " />
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
