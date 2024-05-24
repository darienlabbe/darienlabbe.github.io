import React, { useState } from "react";
import { LuMoonStar } from 'react-icons/lu';
import { PiBracketsCurlyBold } from 'react-icons/pi';

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => { setNav(!nav); };

    function handleScroll(id) {
        document.getElementById(id)?.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    };

    function handleMobileNav(id) {
        handleNav();
        handleScroll(id);
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
                                        <button onClick={() => handleScroll('Projects')} className='text-border-color-gray duration-200 hover:bg-gradient-to-r from-primary-color to-secondary-color hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Projects</button>
                                        <button onClick={() => handleScroll('Skills')} className='text-border-color-gray duration-200 hover:bg-gradient-to-r from-primary-color to-secondary-color hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Skills</button>
                                        <button onClick={() => handleScroll('About')} className='text-border-color-gray duration-200 hover:bg-gradient-to-r from-primary-color to-secondary-color hover:text-white rounded-md px-3 py-2 text-sm font-medium'>About</button>
                                        <button onClick={() => handleScroll('Contact')} className='text-border-color-gray duration-200 hover:bg-gradient-to-r from-primary-color to-secondary-color hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Contact</button>
                                        <button className='flex text-2xl text-footer-color cursor-pointer duration-200 hover:scale-110'><LuMoonStar/></button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex md:hidden'>
                                <button className='flex items-center px-4 text-2xl text-footer-color cursor-pointer'><LuMoonStar/></button>
                                <button onClick={handleNav} type='button' className='relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-dark-primary to-dark-secondary p-2 text-white focus:ring-1 focus:ring-offset-2 focus:ring-offset-light-emerald' aria-controls='mobile-menu' aria-expanded='false'>
                                    <span className='absolute -inset-0.5'></span>
                                    <span className='sr-only'>Open main menu</span>
                                    <svg className='block h-6 w-6' fill='full' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                                    </svg>
                                    <svg className='hidden h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={nav?'md:hidden ease-in duration-300':'md:hidden ease-in duration-500 opacity-0 -translate-y-[200%]'} id='mobile-menu'>
                        <div className='px-2 py-1 sm:px-3 bg-background drop-shadow-lg shadow-lg w-full'>
                            <button onClick={() => handleMobileNav('Projects')} className='text-footer-color duration-200 hover:bg-gradient-to-r hover:from-dark-primary hover:to-dark-secondary hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-dark-primary focus:to-dark-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Projects</button>
                            <button onClick={() => handleMobileNav('Skills')} className='text-footer-color duration-200 hover:bg-gradient-to-r hover:from-dark-primary hover:to-dark-secondary hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-dark-primary focus:to-dark-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Skills</button>
                            <button onClick={() => handleMobileNav('About')} className='text-footer-color duration-200 hover:bg-gradient-to-r hover:from-dark-primary hover:to-dark-secondary hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-dark-primary focus:to-dark-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>About</button>
                            <button onClick={() => handleMobileNav('Contact')} className='text-footer-color duration-200 hover:bg-gradient-to-r hover:from-dark-primary hover:to-dark-secondary hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-dark-primary focus:to-dark-secondary focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Contact</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;