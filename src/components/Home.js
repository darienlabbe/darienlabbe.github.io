import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { LuMail } from 'react-icons/lu';
import Projects from './Projects';
import NavBar from './NavBar';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './footer';

function Home() {
    return (
        <div>
            <NavBar/>
            <div className='flex max-md:flex-col justify-between items-center drop-shadow-md' id='Home'>
                <div className='m-auto max-sm:ml-auto'>
                    <div className='ml-32 max-xl:ml-14 max-sm:ml-auto'>
                        <h1 className='text-6xl max-md:text-4xl m-auto mt-5 max-md:mt-1 pt-10 font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Darien Labbe</h1>
                        <h2 className='text-4xl max-md:text-2xl m-auto mt-5 max-md:mt-1 font-semibold text-green-950'>Computer Science Student</h2>
                        <h2 className='text-3xl max-md:text-xl m-auto mt-5 max-md:mt-1 font-semibold text-green-950 text-opacity-70'>Aspiring Software Engineer</h2>
                        <div className='flex text-green-950 mt-10 max-md:mt-3'>
                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/darienlabbe/' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 hover:text-[#0a66c2] hover:scale-110 hover:duration-200'><AiFillLinkedin/></a>
                            <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 hover:text-[#f05639] hover:scale-110 hover:duration-200'><AiFillGithub/></a>
                            <a href='mailto:darienlabbe@gmail.com' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 hover:text-green-600 hover:scale-110 hover:duration-200'><LuMail/></a>
                        </div>
                        <div className='pt-10'>
                            <button target='_blank' rel="noreferrer" href='Darien-Labbe-Resume.pdf' className='bg-gradient-to-r from-emerald-600 to-green-500 text-white hover:duration-200 hover:scale-110 rounded-md px-3 py-2 text-lg font-semibold'>Download CV</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center m-auto items-center bg-gradient-to-b from-emerald-700 to-white rounded-full max-lg:scale-75 lg:mt-10 border-emerald-700 border-2 drop-shadow-lg'>
                    <img src='perfil.png' className='relative rounded-full' alt='profile of me'/>
                </div>
            </div>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;