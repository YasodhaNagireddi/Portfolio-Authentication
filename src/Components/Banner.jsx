import { FiGithub, FiInstagram } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { LuMouse } from 'react-icons/lu';
import Profile from '../assets/bannerImage.jpg';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';




const Banner = () => {

    const comp = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from('#intro-slider', {
                yPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            }).from(['#title'], {
                opacity: 0,
                y: "-=30",
                stagger: 0.5,
            }).to([], {
                opacity: 0,
                y: "+=30",
                delay: 0.2,
                stagger: 0.5,
            });
            return t1;
        }, comp)
        return () => ctx.revert()
    }, [])

    return (
        <div ref={comp} id='Home' className='text-center pt-10 lg:w[100%]'>
            <h2 id='title' className='text-xl'>Hello, I am</h2>
            <h2 id='title' className='text-3xl my-2'>Yasodha Nagireddi</h2>
            <p id='title'>I am a Fullstack Developer</p>

            <div id='title' className='flex gap-2 justify-center'>
                <button className='px-[20px] py-[5px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da]' download><a href={resume} download='resume'>Dowload</a></button>
                <Link to='/about' className='px-[20px] py-[5px] rounded mt-6 bg-[#1484da] transition-all duration-700 ease-in-out border-[#1484da] hover:bg-transparent'>About Me</Link>
            </div>

            <div className='text-white flex lg:flex-row flex-col lg:justify-around items-center'>
                <div className='flex gap-2 lg:flex-col justify-center mt-10 '>
                    <a href='https://github.com/YasodhaNagireddi' target='_blank' className='text-[#1484da] hover:text-[#1484da] rounded-full glow p-2'>
                        <FiGithub className='bg-gray-900 p-[6px] text-3xl rounded' />
                    </a>
                    <a href='linkedin.com/in/yasodha-nagireddi-7691161a4' target='_blank' className='text-[#1484da] hover:text-[#1484da] rounded-full glow p-2'>
                        <FaLinkedinIn className='bg-gray-900 p-[6px] text-3xl rounded' />
                    </a>
                    <a href='#' target='_blank' className='text-[#1484da]  hover:text-[#1484da] rounded-full glow p-2'>
                        <FaFacebookF className='bg-gray-900 p-[6px] text-3xl rounded' />
                    </a>
                    <a href='#' target='_blank' className='text-[#1484da] hover:text-[#1484da] rounded-full glow p-2'>
                        <FiInstagram className='bg-gray-900 p-[6px] text-3xl rounded' />
                    </a>

                </div>

                <img id='intro-slider' className='rounded-t-full border-2  border-[#1484da] img_glow lg:h-80 h-96 mt-10 ' src={Profile} alt='Profile' />

                <div className='hidden lg:flex flex-col justify-center'>

                    <LuMouse className='text-xl animate-bounce mb-4' />



                    <Link
                        to='/projects'
                        smooth={true}
                        spy={true}
                        offset={50}
                        duration={500}
                    >
                        <p className='[writing-mode:vertical-rl]'>Projects</p>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Banner;
