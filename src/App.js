import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { LuMail, LuMoonStar } from "react-icons/lu";
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
              <li className='px-5 py-2'><LuMoonStar className='cursor-pointer text-4xl text-emerald-900 ml-2'/></li>
            </ul>
          </nav>
        </section>
      </div>
      <div className='font-sans py-20 flex justify-center items-center'>
        <div className='mr-40'>
          <h1 className='text-6xl mt-6 font-bold text-emerald-500'>Darien Labbe</h1>
          <h2 className='text-4xl mt-6 font-semibold text-green-950'>Computer Science Student</h2>
          <h2 className='text-3xl my-6 font-semibold text-green-950 text-opacity-70'>Aspiring Software Engineer</h2>
          <div className='flex py-2 justify-start text-green-950'>
            <AiFillLinkedin className='text-4xl mr-20 cursor-pointer'/>
            <AiFillGithub className='text-4xl mr-20 cursor-pointer'/>
            <LuMail className='text-4xl mr-20 cursor-pointer'/>
          </div>
        </div>
        <div className='relative bg-gradient-to-b from-emerald-600 to-green-50 rounded-full w-auto h-auto'>
          <img src='perfil.png' className='rounded-full w-auto h-auto' alt='profile of me'/>
        </div>
      </div>
    </div>
  );
}

export default App;
