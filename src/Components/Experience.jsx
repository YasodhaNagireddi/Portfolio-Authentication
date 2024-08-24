import React from 'react';

const Experience = () => {


    return (
        <div className='pb-44 pt-28 lg:px-64 md:px-28 bg-gray-900'>
            <h1 className='text-4xl text-white text-bold mb-10 text-center'>Experience</h1>
            <div className='mx-w-7xl mx-auto w-full grid grid-cols-9 px-2'>
                <div className='col-span-4 w-full h-full' >
                    <div className='w-full h-full p-2 md:pl-4'>
                        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>July 2024</time>
                        <h3 className='text-lg font-semibold text-gray-200 my-2 dark:text-white'>SDE Intern</h3>
                        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'> I currently working in Akcepted as a SDE internship. </p>
                    </div>

                </div>

                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-[1px] bg-[#1484da]'></div>
                    <div className='absolute w-3 h-3 rounded-full bg-[#1484da] z-10 text-white text-center'></div>
                </div>

                <div className='col-span-4 w-full h-full'></div>
                <div className='col-span-4 w-full h-full'></div>

                <div className='col-span-4 w-full h-full' >
                    <div className='w-full h-full p-2 md:pl-24'>
                        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>January 2023</time>
                        <h3 className='text-lg font-semibold text-gray-200 my-2 dark:text-white'>Frontend Developer</h3>
                        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>I have 1 year Experience in Frontend Development.Using React and Tailwind CSS.</p>
                    </div>

                </div>

                <div className='col-span-4 w-full h-full' >
                    <div className='w-full h-full p-2 md:pl-4'>
                        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>February 2022</time>
                        <h3 className='text-lg font-semibold text-gray-200 my-2 dark:text-white'>Application UI code in Tailwind CSS</h3>
                        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>Get access to over 20+ pages including a dashboard layout, charts,Kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    </div>

                </div>

                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-[1px] bg-[#1484da]'></div>
                    <div className='absolute w-3 h-3 rounded-full bg-[#1484da] z-10 text-white text-center'></div>
                </div>

                <div className='col-span-4 w-full h-full'></div>
                <div className='col-span-4 w-full h-full'></div>



            </div>

        </div>
    );
}

export default Experience;
