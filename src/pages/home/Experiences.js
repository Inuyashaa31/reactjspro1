import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { experiences } from '../../resources/experiences';

function Experiences() {
    const [selectedItemIndex, setSelectedIndex] = React.useState(0);

    return (
        <div className='py-24 sm:py-48'>
            <SectionTitle title="Experience" />

            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='flex flex-col gap-10 border-l-2 border-[#00447c] w-1/3 sm:overflow-scroll sm:w-ful'>
                    {experiences.map((experience, index) => (
                        <div
                            onClick={() => {
                                setSelectedIndex(index)
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-notso border-notso border-l-4 -ml-[3px] bg-[#00447c] py-3' : 'text-secondary'}`}>
                                {experience.period}
                            </h1>
                        </div>
                    ))}

                </div>

                <div className='flex flex-col gap-10 sm:w-full'>
                    <h1 className='text-notso text-xl '>
                        {experiences[selectedItemIndex].title}
                    </h1>
                    <h1 className='text-secondary text-xl '>
                        {experiences[selectedItemIndex].company}
                    </h1>
                    <p className='text-black text-justify'>
                    {experiences[selectedItemIndex].description}
                    </p>
                </div>
                </div>
            </div>
        
    
);
}
export default Experiences;
