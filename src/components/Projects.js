import React from "react";


function Projects() {
    return (
        <div className='' id='Projects'>
            <div className='flex flex-col justify-center items-center py-7 pt-16'>
                <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Projects</h1>
                <p className='font-light tracking-wide'>Click on a project to learn more</p>
            </div>
            <div className='flex flex-col justify-between items-center max-w-[1000px] m-auto'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 px-16'>
                    <img href='' src='biosound.png' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='BioSoundSCape Internship'/>
                    <img href='' src='computervision.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='computer vision projects'/>
                    <img href='' src='cube.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='graphics projects'/>
                    <img href='' src='spamorham.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='spam or not project'/>
                    <img href='' src='wordleguesser.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='wordle guesser project'/>
                    <img href='' src='socialmedia.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='our space project'/>
                    <img href='' src='wormtitle.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='worm project'/>
                    <img href='' src='wormtitle.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='this website'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;