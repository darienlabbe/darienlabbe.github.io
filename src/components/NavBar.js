import { LuMoonStar } from 'react-icons/lu';
import { PiBracketsCurlyBold } from 'react-icons/pi';
import React, { useState } from 'react';

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='min-w-full sticky top-0 z-50 bg-white'>
            <section className='flex flex-col justify-between h-24'>
                <nav>
                    <div className='drop-shadow-lg shadow-lg w-full px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-[90px] items-center justify-center max-md:justify-between'>
                            <div className='flex'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <PiBracketsCurlyBold className='h-6 w-6 mr-1'/>
                                    <a href='#Home' className='text-2xl flex font-bold cursor-pointer'>Darien Labbe</a>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-center space-x-4'>
                                        <a href='#Projects' className='text-gray-400 hover:bg-gradient-to-r from-emerald-600 to-green-500 hover:text-white hover:duration-200 rounded-md px-3 py-2 text-sm font-medium'>Projects</a>
                                        <a href='#Skills' className='text-gray-400 hover:bg-gradient-to-r from-emerald-600 to-green-500 hover:text-white hover:duration-200 rounded-md px-3 py-2 text-sm font-medium'>Skills</a>
                                        <a href='#About' className='text-gray-400 hover:bg-gradient-to-r from-emerald-600 to-green-500 hover:text-white hover:duration-200 rounded-md px-3 py-2 text-sm font-medium'>About</a>
                                        <a href='#Contact' className='text-gray-400 hover:bg-gradient-to-r from-emerald-600 to-green-500 hover:text-white hover:duration-200 rounded-md px-3 py-2 text-sm font-medium'>Contact</a>
                                        <a className='flex text-2xl text-emerald-900 cursor-pointer hover:scale-110 hover:duration-200'><LuMoonStar/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex md:hidden'>
                                <a className='flex items-center px-4 text-2xl text-emerald-900 cursor-pointer'><LuMoonStar/></a>
                                <button onClick={handleNav} type='button' className='relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-green-500 p-2 text-green-200 hover:text-white focus:ring-1 focus:ring-offset-2 focus:ring-offset-emerald-400' aria-controls='mobile-menu' aria-expanded='false'>
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
                    <div className={nav?'md:hidden ease-in duration-300':'md:hidden ease-in duration-500 opacity-0'} id='mobile-menu'>
                        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white drop-shadow-lg shadow-lg w-full'>
                            <a href='#Projects' onClick={handleNav} className='text-gray-800 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-400 hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-emerald-700 focus:to-green-400 focus:text-white block rounded-md px-3 py-2 text-base font-medium' aria-current='page'>Projects</a>
                            <a href='#Skills' onClick={handleNav} className='text-gray-800 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-400 hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-emerald-700 focus:to-green-400 focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Skills</a>
                            <a href='#About' onClick={handleNav} className='text-gray-800 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-400 hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-emerald-700 focus:to-green-400 focus:text-white block rounded-md px-3 py-2 text-base font-medium'>About</a>
                            <a href='#Contact' onClick={handleNav} className='text-gray-800 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-green-400 hover:opacity-70 hover:text-white focus:bg-gradient-to-r focus:from-emerald-700 focus:to-green-400 focus:text-white block rounded-md px-3 py-2 text-base font-medium'>Contact</a>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
}

export default NavBar;