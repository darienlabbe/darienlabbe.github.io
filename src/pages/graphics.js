import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallNav from '../components/SmallNav.js';
import LeftArrow from '../components/LeftArrow.js';
import RightArrow from '../components/RightArrow.js';
import ProjectImages from '../components/ProjectImages.js';

function Graphics() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Graphics Projects</h1>
                </div>
                <div className='flex flex-col items-start max-w-[1000px] m-auto max-lg:mx-10 pb-20'>
                    <h1 className='text-xl max-md:text-lg font-bold pb-2'>CS 375: Graphics</h1>
                    <p>This page holds the projects that I created throughout the course, CS 375 taught by Dave Shreiner, I took at Sonoma State that dives into computer 
                        graphics in WebGL. All the code for the projects shown on this page can be seen on my GitHub in a repository called CS-375. Click
                        <a target='_blank' rel='noreferrer' href='https://github.com/darienlabbe/CS-375/' className='text-t-link font-bold'> here </a>
                        for that repository, or click on each image for the particular assignment that it is in.</p>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/darienlabbe/CS-375/tree/main/Assignment-3' className='mb-20 max-md:mb-0'><ProjectImages src='cube-light.png'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Cube Project:</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>The first major project I did in this class is displayed on the left, a cube spinning in space. The goal was to create a cube object and 
                                    set up a webGL space with the proper viewing and object transformations along with animations for it as well.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                        <a target='_blank' rel='noreferrer' href='https://github.com/darienlabbe/CS-375/tree/main/Solar-System' className='mb-20 max-md:mb-0'><ProjectImages src='solarsystem.jpg'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>The Solar System Project:</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>The second assignment is a look at a project that utilizes a stack to keep track of transformations. The project is called The Solar System 
                                    Project, and the goal is to create a sun that spins about its axis, with an earth that spins and rotates around the sun, with a moon that 
                                    also spins and rotates around the earth. For a little extra fun, I also added in Mercury and Saturn, along with its rings, that both also 
                                    rotates around the sun.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                        <a target='_blank' rel='noreferrer' href='https://github.com/darienlabbe/CS-375/tree/main/Final-Project' className='mb-20 max-md:mb-0'><ProjectImages src='ahouse.jpg'/></a>
                        <div className='mb-20'>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>A House Project:</h1>
                            <div className='text-base max-md:text-sm'>
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
            <div className='max-2xl:h-40'>
                <div className='fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/CompVis'><LeftArrow/></Link>
                </div>
                <div className='fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/SpamOrHam'><RightArrow/></Link>
                </div>
                <div className='hidden justify-center items-center p-4 space-x-10 max-2xl:flex'>
                    <Link to='/CompVis'><LeftArrow/></Link>
                    <Link to='/SpamOrHam'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default Graphics;