import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { courses } from '../../resources/courses';

function Courses() {
    const [selectedItemIndex, setSelectedIndex] = React.useState(0);

    return (
        <div className=''>
            <SectionTitle title="Course Certificates" />

            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='flex flex-col gap-10 border-l-2 border-[#00447c] w-1/2 sm:overflow-scroll sm:w-ful'>
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-notso border-notso border-l-4 -ml-[4px] bg-[#00447c] py-3' : 'text-secondary'}`}>
                                {course.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-10 px-20 py-10 sm:px-0'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-notso text-xl '>
                            {courses[selectedItemIndex].image}
                        </h1>
                        <p className='text-black text-justify'>
                            {courses[selectedItemIndex].description}
                        </p>
                        <button 
                            className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'
                            onClick={() => window.open(courses[selectedItemIndex].link, '_blank')}
                        >
                            View Certificate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
