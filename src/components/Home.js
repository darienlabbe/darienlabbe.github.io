import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { LuMail } from 'react-icons/lu';

function Home() {
    return (
        <div className='flex max-md:flex-col justify-between items-center' id='Home'>
            <div className='m-auto max-md:ml-16 max-sm:ml-auto -z-50'>
                <h1 className='text-6xl max-md:text-4xl m-auto mt-5 max-md:mt-1 pt-10 font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Darien Labbe</h1>
                <h2 className='text-4xl max-md:text-2xl m-auto mt-5 max-md:mt-1 font-semibold text-green-950'>Computer Science Student</h2>
                <h2 className='text-3xl max-md:text-xl m-auto mt-5 max-md:mt-1 font-semibold text-green-950 text-opacity-70'>Aspiring Software Engineer</h2>
                <div className='flex text-green-950 mt-10 max-md:mt-3'>
                    <a target='_blank' href='https://www.linkedin.com/in/darienlabbe/' className='cursor-pointer'><AiFillLinkedin className='text-4xl max-md:text-2xl mr-20 max-md:mr-10'/></a>
                    <a target='_blank' href='https://github.com/darienlabbe' className='cursor-pointer'><AiFillGithub className='text-4xl max-md:text-2xl mr-20 max-md:mr-10'/></a>
                    <a href='mailto:darienlabbe@gmail.com' className='cursor-pointer'><LuMail className='text-4xl max-md:text-2xl mr-20 max-md:mr-10'/></a>
                </div>
            </div>
            <div className='flex justify-center m-auto items-center bg-gradient-to-b from-emerald-700 to-white rounded-full max-lg:scale-75 lg:mt-10'>
                <img src='perfil.png' className='relative rounded-full' alt='profile of me'/>
            </div>
        </div>
    );
}

export default Home;