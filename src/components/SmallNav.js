import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { LuMoonStar } from 'react-icons/lu';
import { FiSun } from 'react-icons/fi';

function SmallNav() {
    const [isDark, setTheme] = useState(localStorage.getItem('theme') === 'dark');

    function handleThemeSwap() {
        // Remove the currently applied theme so a new them can be applied
        document.body.classList.remove('light');
        document.body.classList.remove('dark');
        
        // Get the currently selected theme
        const selectedTheme = localStorage.getItem('theme');
        
        // Swap the them to the other
        if(selectedTheme === 'dark') {
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light');
            setTheme(false);
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme(true);
        }
    }

    return (
        <div id='SmallNav' className='sticky top-0 z-50 bg-background min-w-full'>
            <div className='flex flex-col justify-between h-24'>
                <nav>
                    <div className='drop-shadow-lg shadow-lg'>
                        <div className='flex h-[90px] items-center justify-center'>
                            <div className='flex space-x-10'>
                                <div className='flex items-center'>
                                    <PiBracketsCurlyBold className='h-6 w-6 mx-2'/>
                                    <Link to='/' className='text-2xl flex font-bold cursor-pointer'>Darien Labbe</Link>
                                </div>
                                <div className='flex items-center mx-2'>
                                    {isDark? <button onClick={() => handleThemeSwap()} className='flex text-2xl text-t-dark cursor-pointer duration-200 hover:scale-110'><FiSun/></button> : <button onClick={() => handleThemeSwap()} className='flex text-2xl text-t-dark cursor-pointer duration-200 hover:scale-110'><LuMoonStar/></button>}
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