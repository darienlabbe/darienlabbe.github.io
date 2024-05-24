import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { LuMoonStar } from 'react-icons/lu';
import { PiBracketsCurlyBold } from 'react-icons/pi';

function Graphics() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <div id='SmallNav' className='min-w-full sticky top-0 z-50 bg-white'>
                <section className='flex flex-col justify-between h-24'>
                    <nav>
                        <div className='drop-shadow-lg shadow-lg w-full px-4 sm:px-6 lg:px-8'>
                            <div className='flex h-[90px] items-center justify-center max-md:justify-between'>
                                <div className='flex'>
                                    <div className='flex-shrink-0 flex items-center'>
                                        <PiBracketsCurlyBold className='h-6 w-6 mr-1'/>
                                        <Link to='/' className='text-2xl flex font-bold cursor-pointer'>Darien Labbe</Link>
                                    </div>
                                    <div className='flex'>
                                        <div className='flex items-center ml-10 space-x-4'>
                                            <button className='flex text-2xl text-emerald-900 cursor-pointer hover:scale-110 hover:duration-200'><LuMoonStar/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Graphics Projects</h1>
                </div>
                <div className='flex flex-col items-center max-w-[1300px] m-auto max-md:mx-8 pb-20'>
                    <p>This page holds the projects that I created throughout the course, CS 375 taught by Dave Shreiner, I took at Sonoma State that dives into computer 
                        graphics in WebGL. All the code for the projects shown on this page can be seen on my GitHub in a repository called CS-375. Click
                        <a target='_blank' rel="noreferrer" href='https://www.sciencedirect.com/science/article/pii/S1470160X22003028' className='text-green-600 font-bold'> here </a>
                        for that repository, or click on each image for the particular assignment that it is in.</p>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-375/tree/main/Assignment-3'><img src='cube-light.png' className='hover:scale-105 duration-200 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg w-96 h-96 rounded-lg m-auto mb-20' alt='cube'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl font-bold pb-2'>Cube Project:</h1>
                            <div className='text-lg'>
                                <p>The first major project I did in this class is displayed on the left, a cube spinning in space. The goal was to create a cube object and 
                                    set up a webGL space with the proper viewing and object transformations along with animations for it as well.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-375/tree/main/Solar-System'><img src='solarsystem.jpg' className='hover:scale-105 duration-200 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg rounded-lg max-w-96 m-auto mb-20' alt='solar system'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl font-bold pb-2'>The Solar System Project:</h1>
                            <div className='text-lg'>
                                <p>The second assignment is a look at a project that utilizes a stack to keep track of transformations. The project is called The Solar System 
                                    Project, and the goal is to create a sun that spins about its axis, with an earth that spins and rotates around the sun, with a moon that 
                                    also spins and rotates around the earth. For a little extra fun, I also added in Mercury and Saturn, along with its rings, that both also 
                                    rotates around the sun.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-375/tree/main/Final-Project'><img src='ahouse.jpg' className='hover:scale-105 duration-200 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg rounded-lg max-w-96 m-auto mb-20' alt='the house project'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl font-bold pb-2'>A House Project:</h1>
                            <div className='text-lg'>
                                <p>The third assignment is a look at a large final project for the course that utilizes all of our knowledge from the year, mixed with our own 
                                    outside knowledge to create a project whose main focus relies on 3D graphics. My project proposal was: "To create a 3d scene to walk around 
                                    and look at from all angles".</p><br/>
                                <p>This project took over a month to develop and relied heavily on my own research and previous knowledge. I am quite proud of what I was able to 
                                    create. The project was made in Three.js and Blender. If you wish to take a look at the code behind this project, click the photo to be taken 
                                    to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graphics;