
function temp() {
    return (
        <nav className='flex justify-between sm:px-6 lg:px-8 m-auto'>
                    <div className='flex items-center'>
                        <PiBracketsCurlyBold className='h-6 w-6'/>
                        <h1 className='text-2xl flex font-bold cursor-pointer'>Darien Labbe</h1>
                    </div>
                    <ul className='hidden md:block items-center justify-between'>
                        <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md cursor-pointer'>Projects</li>
                        <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md cursor-pointer'>Skills</li>
                        <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md cursor-pointer'>About</li>
                        <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md cursor-pointer'>Contact</li>
                        <li className='py-2'><LuMoonStar className='cursor-pointer text-4xl text-emerald-900'/></li>
                    </ul>

                    <div class="relative ml-3">
                        <div>
                            <button type="button" class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                            </button>
                        </div>
                        <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Projects</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Skills</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">About</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Contact</a>
                        </div>
                    </div>
                    <div class="flex md:hidden">
                        <button type="button" class="relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-green-200 p-2 hover:text-white focus:ring-1 focus:ring-offset-1 focus:ring-offset-emerald-400" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </nav>
    );
}

export default temp;