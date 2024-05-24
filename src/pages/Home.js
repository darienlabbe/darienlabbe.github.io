import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LuMail } from 'react-icons/lu';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import NavBar from '../components/NavBar';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <NavBar/>
            <section id='Title' className='flex max-md:flex-col justify-between items-center drop-shadow-md'>
                <div className='m-auto max-sm:ml-auto'>
                    <div className='ml-32 max-xl:ml-14 max-sm:ml-auto'>
                        <h1 className='text-6xl max-md:text-4xl m-auto mt-5 max-md:mt-1 pt-10 font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Darien Labbe</h1>
                        <h2 className='text-4xl max-md:text-2xl m-auto mt-5 max-md:mt-1 font-semibold text-green-950'>Computer Science Student</h2>
                        <h2 className='text-3xl max-md:text-xl m-auto mt-5 max-md:mt-1 font-semibold text-green-950 text-opacity-70'>Aspiring Software Engineer</h2>
                        <div className='flex text-green-950 mt-10 max-md:mt-3'>
                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/darienlabbe/' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 duration-200 hover:text-[#0a66c2] hover:scale-110'><AiFillLinkedin/></a>
                            <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 duration-200 hover:text-[#f05639] hover:scale-110'><AiFillGithub/></a>
                            <a href='mailto:darienlabbe@gmail.com' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 hover:text-green-600 duration-200 hover:scale-110'><LuMail/></a>
                        </div>
                        <div className='flex pt-10'>
                            <a target='_blank' rel="noreferrer" href='Darien-Labbe-Resume.pdf' className='bg-gradient-to-r from-emerald-600 to-green-500 text-white text-opacity-70 rounded-md p-3 text-lg font-semibold duration-200 hover:text-white hover:scale-110'>Download CV</a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center m-auto items-center bg-gradient-to-b from-emerald-700 to-white rounded-full max-lg:scale-75 lg:mt-10 border-emerald-700 border-2 drop-shadow-lg'>
                    <img src='perfil.png' className='relative rounded-full' alt='profile of me'/>
                </div>
            </section>
            <section id='Projects' className='py-10 drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Projects</h1>
                    <p className='font-light tracking-wide mx-6 text-center'>Click on a project to learn more</p>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1000px] m-auto'>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 px-16'>
                        <button onClick={() => navigate("/Biosound")}><img href='../pages/Biosound.js' src='biosound.png' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='BioSoundSCape Internship'/></button>
                        <button onClick={() => navigate("/Autochickfeed")}><img href='../pages/Autochickfeed.js' src='autochickfeed.png' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='automatic chicken feeder'/></button>
                        <button onClick={() => navigate("/Server")}><img href='../pages/Server.js' src='server.png' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='nas server'/></button>
                        <button onClick={() => navigate("/Compvis")}><img href='../pages/Compvis.js' src='computervision.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='computer vision projects'/></button>
                        <button onClick={() => navigate("/Graphics")}><img href='../pages/Graphics.js' src='cube.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='graphics projects'/></button>
                        <button onClick={() => navigate("/Spamorham")}><img href='../pages/Spamorham.js' src='spamorham.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='spam or not project'/></button>
                        <button onClick={() => navigate("/Wordleguesser")}><img href='../pages/Wordleguesser.js' src='wordleguesser.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='wordle guesser project'/></button>
                        <button onClick={() => navigate("/Socialmedia")}><img href='../pages/Socialmedia.js' src='socialmedia.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='our space project'/></button>
                        <button onClick={() => navigate("/Worm")}><img href='../pages/Worm.js' src='wormtitle.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='worm project'/></button>
                        <button onClick={() => navigate("/Website")}><img href='../pages/Website.js' src='website.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='this website'/></button>
                    </div>
                </div>
            </section>
            <section id='Skills' className='py-10 drop-shadow-md'>
                <div className='flex flex-col justify-center items-center pt-16'>
                    <h1 className='text-4xl p-2 max-lg:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Skills</h1>
                    <p className='font-light tracking-wide mx-6 text-center'>List of my skills I have developed over the years</p>
                </div>
                <div className='max-w-[1000px] m-auto grid grid-cols-3 max-lg:grid-cols-1 gap-2 px-16 grid-auto-rows-auto'>
                    <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:flex-col max-lg:flex'>
                        <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                            <p className='font-semibold'>Programming Languages (Order of Experience):</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>C++</li>
                                <li>C</li>
                                <li>Python</li>
                                <li>C#</li>
                                <li>SQL</li>
                                <li>HTML</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                            <p className='font-semibold'>Programs Used:</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>VS Code</li>
                                <li>Microsoft Visual Studio</li>
                                <li>Clion</li>
                                <li>Xcode</li>
                                <li>MySQL</li>
                                <li>Oracle Apex</li>
                                <li>Adobe Products</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:pt-0 max-lg:flex-col max-lg:flex'>
                        <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                            <p className='font-semibold'>Projects:</p>
                            <p className='h-full'>I have completed well over 50+ projects, ranging from websites, web apps, Machine Learning, Graphics, and many more.</p>
                        </div>
                        <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                            <p className='font-semibold'>Other Key Skills:</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>Microsoft Visual Studio</li>
                                <li>Clion</li>
                                <li>Proficient in Linux Command Line</li>
                                <li>Experience in leadership roles</li>
                                <li>Work well in Teams</li>
                                <li>Work well with others</li>
                                <li>Speak a little French and Spanish</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:pt-0 max-lg:flex-col max-lg:flex'>
                        <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                            <p className='font-semibold'>Job Experience:</p>
                            <p className='h-full'>I have worked as a Machine Learning Research and Developer, designing a CNN to detect for sound classifications for ecosystem analysis in South Africa</p>
                        </div>
                        <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                            <p className='font-semibold'>Awards and Activities:</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>Graduated With Distinction</li>
                                <li>Voted Partner of the Quarter</li>
                                <li>Completed the Starbucks North Bay SSV ADP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id='About' className='py-10 drop-shadow-md'>
                <div className='flex flex-col justify-center items-center pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>About</h1>
                </div>
                <div className='flex flex-row max-md:flex-col justify-center items-center mx-96 max-2xl:mx-32 max-lg:mx-20 max-md:mx-auto'>
                    <img className='flex items-center max-w-[400px] max-lg:max-w-[200px] rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg' src='about.jpg' alt='about'/>
                    <div className='flex flex-col justify-center max-md:items-center p-5 mx-4'>
                        <h1 className="flex ">Hi I'm Darien</h1>
                        <p className='flex'>I am a computer science student studying at Sonoma State University with the prospect
                         of receiving my Bachelors of Science in Computer Science by May 2024. I have yet to narrow my focus onto 
                         any particular path in computer science, however, I have a very open mind and I cannot wait to see what 
                         I will get the opportunity to be able to create.</p>
                    </div>
                </div>
            </section>
            <section id='Contact' className='py-10 drop-shadow-md'>
                <div className='flex flex-col justify-center items-center pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Contact</h1>
                    <p className='font-light tracking-wide mx-6 text-center'>Feel free to reach out</p>
                </div>
            </section>
            <section id='Footer' className='w-full mt-24 text-white bg-green-950 h-60 content-center'>
                <h1 className='flex justify-center items-center text-4xl py-4 font-bold'>Darien Labbe</h1>
                <p className='flex justify-center items-center text-xl py-4 text-center max-md:text-sm'>Created by Darien Labbe - Updated 05/22/2024</p>
            </section>
        </div>
    );
}

export default Home;