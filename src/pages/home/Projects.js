import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';

function Projects() {
    const [selectedItemIndex, setSelectedIndex] = React.useState(0);

    return (
        <div className=''>
            <SectionTitle title="Projects" />

            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='flex flex-col gap-10 border-l-2 border-[#00447c] w-1/3 sm:overflow-scroll sm:w-full sm:flex-col'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-notso border-notso border-l-4 -ml-[4px] bg-[#00447c] py-3' : 'text-secondary'}`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='py-14 px-16 flex items-center justify-center gap-10 sm:w-full sm:px-0'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-notso text-xl '>
                            {projects[selectedItemIndex].title}
                        </h1>
                        <p className='text-black text-justify'>
                            {projects[selectedItemIndex].description}
                        </p>
                        <div className='flex flex-wrap gap-10'>
                            {projects[selectedItemIndex].technologies.map((techno, index) => (
                                <div key={index} className='border border-notso py-3 px-10 gap-5'>
                                    <h1 className='text-notso'>{techno}</h1>
                                </div>
                            ))}
                            <div>
                                <button
                                    className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'
                                    onClick={() => window.open(projects[selectedItemIndex].link, '_blank')}
                                >
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;



