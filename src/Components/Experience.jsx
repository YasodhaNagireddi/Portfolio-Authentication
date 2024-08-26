import React from 'react';

const Experience = () => {


    return (
        <div className='pb-44 pt-28 lg:px-64 md:px-28 bg-gray-900'>
            <h1 className='text-4xl text-white text-bold mb-10 text-center'>Experience</h1>
            <div className='max-w-7xl mx-auto w-full grid grid-cols-9 px-2'>
                {/* Experience: SDE Intern */}
                <div className='col-span-4 w-full h-full'>
                    <div className='w-full h-full p-2 md:pl-4'>
                        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>July 2024 - Present </time>
                        <h3 className='text-lg font-semibold text-gray-200 my-2 dark:text-white'>SDE Intern</h3>
                        <ul className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc pl-5'>
                            <li>I recently joined Akcepted Company as a Software Development Engineer Intern.</li>
                            <li>I am excited to contribute to innovative software solutions.</li>
                            <li>I have the opportunity to collaborate with a talented team remotely.</li>
                            <li>This role allows me to apply my academic knowledge.</li>
                            <li>I am developing my technical skills in a professional environment.</li>
                        </ul>
                    </div>
                </div>

                {/* Timeline Marker */}
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-[1px] bg-[#1484da]'></div>
                    <div className='absolute w-3 h-3 rounded-full bg-[#1484da] z-10'></div>
                </div>

                <div className='col-span-4 w-full h-full'></div>

                {/* Spacer for alignment */}
                <div className='col-span-4 w-full h-full'></div>

                {/* Timeline Marker */}
                <div className='relative col-span-1 w-full h-full flex justify-center items-center'>
                    <div className='h-full w-[1px] bg-[#1484da]'></div>
                    <div className='absolute w-3 h-3 rounded-full bg-[#1484da] z-10'></div>
                </div>

                {/* Experience: Associate Software Engineer */}
                <div className='col-span-4 w-full h-full'>
                    <div className='w-full h-full p-2 md:pr-4'>
                        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>January 2022 - March 2023</time>

                        <h3 className='text-lg font-semibold text-gray-200 my-2 dark:text-white'>Associate Software Engineer - Prodapt Solutions - Hyderabad</h3>
                        <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>01/2022 - 03/2023</time>
                        <ul className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc pl-5'>
                            <li>Create web pages using HTML, CSS, and JavaScript and maintain websites.</li>
                            <li>Designed and created database systems after reviewing end user's requirements.</li>
                            <li>Maintained a clean and organized working environment to enhance productivity and learned new technologies within a minimal period.</li>
                            <li>Developed web applications independently and within a tight timeline.</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Experience;



