import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallNav from '../components/SmallNav.js';
import LeftArrow from '../components/LeftArrow.js';
import RightArrow from '../components/RightArrow.js';
import ProjectImages from '../components/ProjectImages.js';

function Worm() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Worm Game</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/darienlabbe/Worm-Game'><ProjectImages src='worm.jpg'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Project: The Ascii Worm Game</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>This project is very similar to the classic snake game where you control a little worm around, trying not to run into yourself or the wall, 
                                    while collecting the food that is randomly placed around the playing field, growing your worm larger and larger making it harder to stay 
                                    alive. This particular worm game uses "W A S D" controls and rather than single apples as food, a random number generator creates a score value 
                                    for each piece of food. Not only does your worm get that value of points but when collected, that value will increase the worm by that number 
                                    of lengths as well. For Instance, if you collect food of value 5, the worm would grow five lengths longer. The goal is to stay alive and eat 
                                    as much as possible and try to get the highest score.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-2xl:h-40'>
                <div className='fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/SocialMedia'><LeftArrow/></Link>
                </div>
                <div className='fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/Website'><RightArrow/></Link>
                </div>
                <div className='hidden justify-center items-center p-4 space-x-10 max-2xl:flex'>
                    <Link to='/SocialMedia'><LeftArrow/></Link>
                    <Link to='/Website'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default Worm;