import React from 'react';
import Profile from '../assets/aboutImage.png';
import { GrUserExpert } from 'react-icons/gr';


const About = () => {


    return (
        <div className='py-28 lg:px-44 px-[20px] text-white'>

            <h2 className='text-4xl text-bold mb-28 text-center md:mb-10'>About Me</h2>

            <div className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-36'>

                <img className='h-[25rem] lg:w-[45%] rounded-xl mb-9' src={Profile} alt='profile' />

                <div className='pt-[80px]'>

                    <div className='flex lg:justify-start justify-center gap-[20px] mb-[40px]'>

                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
                            <h2 className='text-[17px] font-bold'>Experts</h2>
                            <span className='py-[1px] text-[16px]'>Frontend Developer</span>
                        </div>

                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
                            <h2 className='text-[17px] font-bold'>Experts</h2>
                            <span className='py-[1px] text-[16px]'>WordPress Developer</span>
                        </div>

                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
                            <h2 className='text-[17px] font-bold'>Experts</h2>
                            <span className='py-[1px] text-[16px]'>Backend Developer</span>
                        </div>
                    </div>

                    <p className='lg:me-43 text-[18px]'>My name is Yasodha Nagireddi. I have 1 year Experience in Associate Software Engineer at Prodapt Solution Hyderbad. Currently i am working in Akcepted Company as SDE Internship. I have knowledge on HTML, CSS, Javascript, Bootstrap,React and Wordpress. I am Passinate about Fullstack Developer. </p>
                </div>

            </div>
        </div>

    );
}

export default About;
