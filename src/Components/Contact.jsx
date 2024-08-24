import React from 'react';

const Contact = () => {
    return (
        <div className='text-white bg-gray-900 lg:p-24 p-4 '>
            <h2 className='text-4xl text-bold mb-20 text-center'>Contact Me</h2>
            <div className='lg:w-[600px] md:w[500px] mx-auto'>

                <div className='relative mt-5'>
                    <input className='block px-2 pb-2.5 pt-4 w-full text-sm bg-transparent w-90 rounded-lg border-2 border-white' type='text' />
                    <label className='absolute -translate-y-5 z-10 top-2 origin-[0] bg-gray-900 mx-4 px-2 text-white text-[16px]' htmlFor=''>Your Name</label>
                </div>

                <div className='relative mt-5'>
                    <input className='block px-2 pb-2.5 pt-4 w-full text-sm bg-transparent w-90 rounded-lg border-2 border-white' type='email' />
                    <label className='absolute -translate-y-5 z-10 top-2 origin-[0] bg-gray-900 mx-4 px-2 text-white text-[16px]' htmlFor=''>Your Email</label>
                </div>

                <div className='relative mt-5'>
                    <textarea cols='30' rows='10' className='block px-2 pb-2.5 pt-4 w-full text-sm bg-transparent w-90 rounded-lg border-2 border-white' type='text' />
                    <label className='absolute -translate-y-5 z-10 top-2 origin-[0] bg-gray-900 mx-4 px-2 text-white text-[16px]' htmlFor=''>Your Message</label>
                </div>

                <div className='flex justify-center'>
                    <button className='px-[20px] py-[6px] text-xl rounded mt-6 bg-[#1484da] mb-10 hover: border transition-all duration-700 ease-in-out hover:bg-transparent border-[#1484da]'>Send</button>
                </div>

            </div>

        </div>
    );
}

export default Contact;
