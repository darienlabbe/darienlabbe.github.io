import React from "react";
import { Link } from 'react-router-dom';
import { LuMoonStar } from 'react-icons/lu';
import { PiBracketsCurlyBold } from 'react-icons/pi';

function Worm() {
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
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Worm Game</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Worm-Game'><img src='worm.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='worm game'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Project: The Ascii Worm Game</h1>
                            <div>
                                <p>This project is very similar to the classic snake game where you control a little worm around, trying not to run into yourself or the wall, 
                                    while collecting the food that is randomly placed around the playing field, growing your worm larger and larger making it harder to stay 
                                    alive. This particular worm game uses WASD controls and rather than single apples as food, a random number generator creates a score value 
                                    for each piece of food. Not only does your worm get that value of points but when collected, that value will increase the worm by that number 
                                    of lengths as well. For Instance, if you collect food of value 5, the worm would grow five lengths longer. The goal is to stay alive and eat 
                                    as much as possible and try to get the highest score.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Worm;