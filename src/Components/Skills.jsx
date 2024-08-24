import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3, TbBrandBootstrap, TbBrandTailwind } from 'react-icons/tb';
import { DiJavascript1 } from 'react-icons/di';
import { IoLogoReact } from 'react-icons/io5';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const Skills = () => {

    const comp = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {

        const fadeIn = () => {
            gsap.to('.fade-in', {
                opacity: 1,
                duration: 1,
                ease: 'power-2.out',
                scrollTrigger: {
                    trigger: 'fade-in',
                    start: 'top 80%',
                    end: 'bottom 10%',
                    toggleAttribute: 'play none none reverse',
                },
            });
        };
        fadeIn();

        return () => {
            gsap.to('.fade-in', { opacity: 0, duration: 0 })
        }

    }, [])


    return (
        <div ref={comp} className='pb-44 pt-28 md:px-40 px-[20px] text-white'>

            <h1 className='text-4xl text-bold mb-28 text-center'>My Skills</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>

                <div className='bg-slate-900 p-[20px] rounded-xl flex flex-col items-center justify-center fade-in'>
                    <AiOutlineHtml5 className='text-[40px] my-2 text-center text-[#1484da]' />
                    <h2 className='text-[20px] font-bold mb-4'>HTML</h2>
                    {/* <span className='py-[1px] text-[17px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> */}
                </div>

                <div className='bg-slate-900 p-[20px] rounded-xl flex flex-col items-center justify-center fade-in'>
                    <TbBrandCss3 className='text-[40px] my-2 text-center text-[#1484da]' />
                    <h2 className='text-[20px] font-bold mb-4'>CSS</h2>
                    {/* <span className='py-[1px] text-[17px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> */}
                </div>

                <div className='bg-slate-900 p-[20px] rounded-xl flex flex-col items-center justify-center fade-in'>
                    <DiJavascript1 className='text-[40px] my-2 text-center text-[#1484da]' />
                    <h2 className='text-[20px] font-bold mb-4'>Javascript</h2>
                    {/* <span className='py-[1px] text-[17px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> */}
                </div>

                <div className='bg-slate-900 p-[20px] rounded-xl flex flex-col items-center justify-center fade-in'>
                    <TbBrandBootstrap className='text-[40px] my-2 text-center text-[#1484da]' />
                    <h2 className='text-[20px] font-bold mb-4'>Bootstrap</h2>
                    {/* <span className='py-[1px] text-[17px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> */}
                </div>

                <div className='bg-slate-900 p-[20px] rounded-xl flex flex-col items-center justify-center fade-in'>
                    <IoLogoReact className='text-[40px] my-2 text-center text-[#1484da]' />
                    <h2 className='text-[20px] font-bold mb-4'>React</h2>
                    {/* <span className='py-[1px] text-[17px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> */}
                </div>

                <div className='bg-slate-900 p-[20px] rounded-xl flex flex-col items-center justify-center fade-in'>
                    <TbBrandTailwind className='text-[40px] my-2 text-center text-[#1484da]' />
                    <h2 className='text-[20px] font-bold mb-4'>Tailwind CSS</h2>
                    {/* <span className='py-[1px] text-[17px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> */}
                </div>



            </div>


        </div>
    );
}

export default Skills;
