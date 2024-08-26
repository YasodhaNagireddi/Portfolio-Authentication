import React from 'react';
import Profile from '../assets/aboutImage.png';
import { GrUserExpert } from 'react-icons/gr';


const About = () => {


    return (

        // <div className='py-28 lg:px-44 px-[20px] text-white'>
        //     <h2 className='text-4xl font-bold mb-28 text-center md:mb-10'>About Me</h2>

        //     <div className='flex lg:flex-row flex-col lg:items-center items-center justify-center gap-36'>
        //         <div className='flex justify-center items-center lg:w-[50%] w-full mb-9'>
        //             <img
        //                 className='max-w-full h-[30rem] w-[30rem] rounded-xl'
        //                 style={{ objectFit: 'cover' }}
        //                 src={Profile}
        //                 alt='profile'
        //             />
        //         </div>

        //         <div className='flex justify-center items-center pt-[80px]'>
        //             <div className='text-center lg:text-left'>
        //                 <div className='flex lg:justify-start justify-center gap-[20px] mb-[40px]'>
        //                     <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
        //                         <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
        //                         <h2 className='text-[17px] font-bold'>Experts</h2>
        //                         <span className='py-[1px] text-[16px]'>Frontend Developer</span>
        //                     </div>

        //                     <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
        //                         <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
        //                         <h2 className='text-[17px] font-bold'>Experts</h2>
        //                         <span className='py-[1px] text-[16px]'>WordPress Developer</span>
        //                     </div>

        //                     <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
        //                         <GrUserExpert className='text-[20px] text-center text-[#1484da] m-[6px]' />
        //                         <h2 className='text-[17px] font-bold'>Experts</h2>
        //                         <span className='py-[1px] text-[16px]'>Backend Developer</span>
        //                     </div>
        //                 </div>

        //                 <p className='lg:me-43 text-[18px]'>
        //                     My name is Nagireddi Yasodha, and I am a passionate Software Development Engineer with a strong foundation in web development, specializing in Python, JavaScript, HTML, CSS, and frameworks like React JS and Tailwind CSS. My experience spans creating dynamic web applications and designing robust database systems, honed through my role as an Associate Software Engineer at Prodapt Solutions. <br /><br />

        //                     Currently, I am an SDE Intern at Akcepted, where I am thrilled to be part of a team that develops innovative software solutions. My role allows me to continuously apply my academic knowledge and grow my technical skills in a professional setting.<br /><br />

        //                     With a keen interest in data visualization and CMS, I am always eager to learn new technologies and take on challenges that push the boundaries of my expertise. Whether working independently or collaborating with a team, I strive to deliver high-quality, efficient solutions that meet user needs.<br /><br />
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='py-10 lg:px-44 px-[20px] text-white'>
            <h2 className='text-4xl font-bold mb-8 text-center'>About Me</h2>

            <div className='flex lg:flex-row flex-col lg:items-center items-center justify-center gap-12 lg:gap-36'>
                <div className='flex justify-center items-center w-full lg:w-[50%] mb-6 lg:mb-0'>
                    <img
                        className='max-w-full h-[20rem] lg:h-[30rem] w-[20rem] lg:w-[30rem] rounded-xl'
                        style={{ objectFit: 'cover' }}
                        src={Profile}
                        alt='profile'
                    />
                </div>

                <div className='flex justify-center items-center lg:pt-[80px]'>
                    <div className='text-center lg:text-left'>
                        <div className='flex lg:justify-start justify-center gap-[20px] mb-[30px]'>
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

                        <p className='lg:me-43 text-[18px]'>
                            My name is Nagireddi Yasodha, and I am a passionate Software Development Engineer with a strong foundation in web development, specializing in Python, JavaScript, HTML, CSS, and frameworks like React JS and Tailwind CSS. My experience spans creating dynamic web applications and designing robust database systems, honed through my role as an Associate Software Engineer at Prodapt Solutions. <br /><br />

                            Currently, I am an SDE Intern at Akcepted, where I am thrilled to be part of a team that develops innovative software solutions. My role allows me to continuously apply my academic knowledge and grow my technical skills in a professional setting.<br /><br />

                            With a keen interest in data visualization and CMS, I am always eager to learn new technologies and take on challenges that push the boundaries of my expertise. Whether working independently or collaborating with a team, I strive to deliver high-quality, efficient solutions that meet user needs.<br /><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>





    );
}

export default About;
