import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallNav from '../components/SmallNav.js';
import LeftArrow from '../components/LeftArrow.js';
import ProjectImages from '../components/ProjectImages.js';

function Website() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>React Website</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/darienlabbe/darienlabbe.github.io'><ProjectImages src='website.jpg'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Project: React Portfolio Website</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>The website you are viewing now was constructed from scratch by me. It is intended to be an extension of my resume, showcasing the projects I have 
                                    completed and talk more about who I am. I created this website using the React framework and Tailwind CSS to more easily style everything.</p><br/>
                                <p>I utilized GitHub pages to host my website and I also made sure to commit to my github regularly as I developed this site so that others can see 
                                    how I worked from a blank canvas to a fully functioning web app. If you wish to take a look at the code behind this project, click the photo to 
                                    be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-2xl:h-40'>
                <div className='fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/Worm'><LeftArrow/></Link>
                </div>
                <div className='hidden justify-center items-center p-4 space-x-10 max-2xl:flex'>
                    <Link to='/Worm'><LeftArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default Website;