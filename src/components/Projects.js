import React from "react";
import { useNavigate } from "react-router-dom";


function Projects() {
    const navigate = useNavigate();

    return (
        <div className='drop-shadow-md' id='Projects'>
            <div className='flex flex-col justify-center items-center py-7 pt-16'>
                <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Projects</h1>
                <p className='font-light tracking-wide mx-6 text-center'>Click on a project to learn more</p>
            </div>
            <div className='flex flex-col justify-between items-center max-w-[1000px] m-auto'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 px-16'>
                    <button onClick={() => navigate("/biosound")}><img href='../pages/biosound.js' src='biosound.png' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='BioSoundSCape Internship'/></button>
                    <button onClick={() => navigate("/compvis")}><img href='../pages/compvis.js' src='computervision.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='computer vision projects'/></button>
                    <button onClick={() => navigate("/graphics")}><img href='../pages/graphics.js' src='cube.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='graphics projects'/></button>
                    <button onClick={() => navigate("/spamorham")}><img href='../pages/spamorham.js' src='spamorham.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='spam or not project'/></button>
                    <button onClick={() => navigate("/wordleguesser")}><img href='../pages/wordleguesser.js' src='wordleguesser.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='wordle guesser project'/></button>
                    <button onClick={() => navigate("/socialmedia")}><img href='../pages/socialmedia.js' src='socialmedia.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='our space project'/></button>
                    <button onClick={() => navigate("/worm")}><img href='../pages/worm.js' src='wormtitle.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='worm project'/></button>
                    <button onClick={() => navigate("/website")}><img href='../pages/website.js' src='website.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='this website'/></button>
                </div>
            </div>
        </div>
    );
}

export default Projects;