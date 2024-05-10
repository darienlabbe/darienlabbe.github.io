import React from 'react';
import { LuMoonStar } from "react-icons/lu";
import { PiBracketsCurlyBold } from "react-icons/pi";

function App() {
  return (
    <div className='bg-white min-h-screen font-mono'>
      <div className='drop-shadow-lg shadow-lg'>
        <section className='px-10'>
          <nav className='py-8 flex justify-between'>
            <div className='flex items-center'>
              <PiBracketsCurlyBold className='text-2xl'/>
              <h1 className='text-2xl font-bold px-2 cursor-pointer'>Darien Labbe</h1>
            </div>
            <ul className='flex items-center'>
              <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md ml-8 cursor-pointer'>Projects</li>
              <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md ml-8 cursor-pointer'>Skills</li>
              <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md ml-8 cursor-pointer'>About</li>
              <li className='bg-gradient-to-r from-emerald-600 to-green-500 px-3 text-white font-semibold py-2 rounded-md ml-8 cursor-pointer'>Contact</li>
              <li className='px-5 py-2'><LuMoonStar className='cursor-pointer text-4xl text-emerald-900'/></li>
            </ul>
          </nav>
          <div>
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
