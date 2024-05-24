import React from 'react';
import { Link } from 'react-router-dom';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { LuMoonStar } from 'react-icons/lu';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function SmallNav() {
    return (
        <div id='SmallNav' className='sticky top-0 z-50 bg-white min-w-full'>
            <div className='flex flex-col justify-between h-24'>
                <nav>
                    <div className='drop-shadow-lg shadow-lg'>
                        <div className='flex h-[90px] items-center justify-center'>
                            <div className='flex'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <PiBracketsCurlyBold className='h-6 w-6 mx-2'/>
                                    <Link to='/' className='text-2xl flex font-bold cursor-pointer'>Darien Labbe</Link>
                                </div>
                                <div className='flex items-center mx-2'>
                                    <button className='flex text-2xl text-emerald-900 cursor-pointer hover:scale-110 hover:duration-200'><LuMoonStar/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default SmallNav;