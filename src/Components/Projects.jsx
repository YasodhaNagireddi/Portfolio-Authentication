import React from 'react';
import project from './data/projects.json'
import Project from '../assets/project.png';


const Projects = () => {
    return (
        <div className='pb-44 pt-28 lg:px-64 md:px-28 bg-gray-900'>

            <h1 className='text-4xl text-bold mb-28 text-center'>Projects</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>

                {
                    project.map((data) => (
                        <>
                            <div className="w-full overflow-hidden shadow-lg bg-[#232a34] pb-4 card_glow border border-[#1484da]" key={data.id}>
                                <div className='flex justify-center items-center pt-6 px-5'>
                                    <img className="w-[300px] h-[240px] border border-[#1484da] " src={Project} alt="Project image" />
                                </div>

                                <div className='px-6'>
                                    <div className="font-bold text-xl pt-5">{data.title}</div>
                                </div>

                                <p className="text-white text-[17px] text-base py-5 px-5 pl-6">
                                    {data.description}
                                </p>
                                <p className='text-white py-5 px-5 pl-5'><span className='text-[#1484da] font-bold text-[14px]'>Technologies: </span>{data.technologies.join(', ')}</p>

                                <div className='flex gap-4 justify-center'>
                                    <a href={data.demo} target='_blank' className='px-[20px] py-[5px] w-[100px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da]'>Demo</a>
                                    <a href={data.source} target='_blank' className='px-[20px] py-[5px] w-[100px] rounded mt-6 bg-[#1484da] transition-all duration-700 ease-in-out hover:bg-transparent border border-[#1484da] '>Code</a>

                                </div>
                            </div>
                        </>
                    ))
                }

                {/* <div className="w-full overflow-hidden shadow-lg bg-[#232a34] pb-4 card_glow border border-[#1484da]">
                    <div className='flex justify-center items-center pt-6 px-5'>
                        <img className="w-[300px] h-[240px] border border-[#1484da] " src={Project_Profile} alt="Project image" />
                    </div>

                    <div className='px-6'>
                        <div className="font-bold text-xl pt-5">Card Title</div>
                    </div>

                    <p className="text-white text-[17px] text-base py-5 px-5 pl-6">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>

                    <div className='flex gap-4 justify-center'>
                        <button className='px-[20px] py-[5px] w-[100px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da]'>Demo</button>
                        <button className='px-[20px] py-[5px] w-[100px] rounded mt-6 bg-[#1484da] transition-all duration-700 ease-in-out hover:bg-transparent border border-[#1484da] '><a href='https://www.youtube.com/watch?v=cWYKs1pu6s4&t=135s' target='_blank'>Code</a></button>

                    </div>
                </div>

                <div className="w-full overflow-hidden shadow-lg bg-[#232a34] pb-4 card_glow border border-[#1484da]">
                    <div className='flex justify-center items-center pt-6 px-5'>
                        <img className="w-[300px] h-[240px] border border-[#1484da] " src={Project_Profile} alt="Project image" />
                    </div>

                    <div className='px-6'>
                        <div className="font-bold text-xl pt-5">Card Title</div>
                    </div>

                    <p className="text-white text-[17px] text-base py-5 px-5 pl-6">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>

                    <div className='flex gap-4 justify-center'>
                        <button className='px-[20px] py-[5px] w-[100px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da]'>Demo</button>
                        <button className='px-[20px] py-[5px] w-[100px] rounded mt-6 bg-[#1484da] transition-all duration-700 ease-in-out hover:bg-transparent border border-[#1484da] '><a href='https://www.youtube.com/watch?v=cWYKs1pu6s4&t=135s' target='_blank'>Code</a></button>

                    </div>
                </div>

                <div className="w-full overflow-hidden shadow-lg bg-[#232a34] pb-4 card_glow border border-[#1484da]">
                    <div className='flex justify-center items-center pt-6 px-5'>
                        <img className="w-[300px] h-[240px] border border-[#1484da] " src={Project_Profile} alt="Project image" />
                    </div>

                    <div className='px-6'>
                        <div className="font-bold text-xl pt-5">Card Title</div>
                    </div>

                    <p className="text-white text-[17px] text-base py-5 px-5 pl-6">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>

                    <div className='flex gap-4 justify-center'>
                        <button className='px-[20px] py-[5px] w-[100px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da]'>Demo</button>
                        <button className='px-[20px] py-[5px] w-[100px] rounded mt-6 bg-[#1484da] transition-all duration-700 ease-in-out hover:bg-transparent border border-[#1484da] '><a href='https://www.youtube.com/watch?v=cWYKs1pu6s4&t=135s' target='_blank'>Code</a></button>

                    </div>
                </div> */}



            </div>
        </div>


    );
}

export default Projects;

