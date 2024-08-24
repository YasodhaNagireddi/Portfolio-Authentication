import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoPersonOutline, } from 'react-icons/io5';
import { BsBag } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineMessage } from 'react-icons/ai';
import { LuClipboardList } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

const Menu = () => {
    return (
        <div className='mx-auto flex justify-center flex-col items-center'>
            <div className='flex gap-4 bg-gray-600 backdrop-blur-sm bg-opacity-40 py-2 px-4 rounded-md fixed backdrop-filter bg-clip-padding bottom-10  md:px-8'>

                <Link activeClass='bg-[#1484da] rounded-full'
                    to='/'
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    <IoHomeOutline className='text-[26px] m-[10px] text-center' />
                </Link>

                <Link activeClass='bg-[#1484da] rounded-full'
                    to='/about'
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    <IoPersonOutline className='text-[26px] m-[10px] text-center' />
                </Link>

                <Link activeClass='bg-[#1484da] rounded-full'
                    to='/experience'
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    <BsBag className='text-[26px] m-[10px] text-center' />
                </Link>

                <Link activeClass='bg-[#1484da] rounded-full'
                    to='/skills'
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    <HiOutlineLightBulb className='text-[26px] m-[10px] text-center' />
                </Link>

                <Link activeClass='bg-[#1484da] rounded-full'
                    to='/projects'
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    <LuClipboardList className='text-[26px] m-[10px] text-center' />
                </Link>

                <Link activeClass='bg-[#1484da] rounded-full'
                    to='/contact'
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    <AiOutlineMessage className='text-[26px] m-[10px] text-center' />
                </Link>

                <Link activeClass='bg-[#1484da] rounded-full'
                    to='/register'
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}
                >
                    <FaRegUserCircle className='text-[26px] m-[10px] text-center' />
                </Link>

            </div>

        </div>
    );
}

export default Menu;
