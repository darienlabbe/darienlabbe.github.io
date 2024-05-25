import React, { useState } from "react";
import { LuMoonStar } from 'react-icons/lu';
import { FiSun } from "react-icons/fi";
import { PiBracketsCurlyBold } from 'react-icons/pi';
import { IoReorderThreeOutline } from "react-icons/io5";

function NavBar() {
    // States for the use of the nav elements and tracking the theme
    const [nav, setNav] = useState(false);
    const handleNav = () => { setNav(!nav); };
    const [isDark, setTheme] = useState(localStorage.getItem('theme') === 'dark');

    // When selecting an element on the nav, make sure the scrolling is smooth
    function handleScroll(id) {
        document.getElementById(id)?.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    // Same as the handleScroll above with the additional functionality of the openable mobile nav
    function handleMobileNav(id) {
        handleNav();
        handleScroll(id);
    }

    // Function for handling theme swapping 
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
        <div id='NavBar' className='min-w-full sticky top-0 bg-background z-50'>
            <div className='flex flex-col justify-between h-24'>
                <nav>
                    <div className='drop-shadow-lg shadow-lg w-full px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-[90px] items-center justify-center max-md:justify-between'>
                            <div className='flex'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <PiBracketsCurlyBold className='h-6 w-6 mr-1'/>
                                    <button onClick={() => { window.scroll({ top: 0, behavior: 'smooth' }); }} className='text-2xl flex font-bold cursor-pointer'>Darien Labbe</button>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-center space-x-4'>
                                        <button onClick={() => handleScroll('Projects')} className='text-t-nav duration-200 hover:bg-gradient-to-r from-primary to-secondary hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Projects</button>
                                        <button onClick={() => handleScroll('Skills')} className='text-t-nav duration-200 hover:bg-gradient-to-r from-primary to-secondary hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Skills</button>
                                        <button onClick={() => handleScroll('About')} className='text-t-nav duration-200 hover:bg-gradient-to-r from-primary to-secondary hover:text-white rounded-md px-3 py-2 text-sm font-medium'>About</button>
                                        <button onClick={() => handleScroll('Contact')} className='text-t-nav duration-200 hover:bg-gradient-to-r from-primary to-secondary hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Contact</button>
                                        <button onClick={() => handleThemeSwap()} className='flex text-2xl text-t-dark cursor-pointer duration-200 hover:scale-110'>{isDark? <FiSun/> : <LuMoonStar/>}</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center md:hidden'>
                                <button onClick={() => handleThemeSwap()} className='flex text-2xl text-t-dark cursor-pointer duration-200 hover:scale-110'>{isDark? <FiSun/> : <LuMoonStar/>}</button>
                            </div>
                            <div className='flex justify-center items-center md:hidden'>
                                <button onClick={handleNav} type='button' className='relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary p-2 text-white focus:ring-1 focus:ring-offset-2 focus:ring-offset-secondary' aria-controls='mobile-menu' aria-expanded='false'>
                                    <IoReorderThreeOutline className='text-3xl'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={nav?'md:hidden ease-in duration-300':'md:hidden ease-in duration-500 opacity-0 translate-x-[100%]'} id='mobile-menu'>
                        <div className='px-2 py-1 sm:px-3 bg-background drop-shadow-lg shadow-lg w-full'>
                            <button onClick={() => handleMobileNav('Projects')} className='duration-200 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white focus:bg-gradient-to-r focus:from-primary focus:to-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Projects</button>
                            <button onClick={() => handleMobileNav('Skills')} className='duration-200 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white focus:bg-gradient-to-r focus:from-primary focus:to-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Skills</button>
                            <button onClick={() => handleMobileNav('About')} className='duration-200 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white focus:bg-gradient-to-r focus:from-primary focus:to-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>About</button>
                            <button onClick={() => handleMobileNav('Contact')} className='duration-200 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white focus:bg-gradient-to-r focus:from-primary focus:to-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Contact</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;