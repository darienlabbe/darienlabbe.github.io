import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LuMail, LuAtSign } from 'react-icons/lu';
import { FaLocationDot } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import NavBar from '../components/NavBar';
import ProjectImages from '../components/ProjectImages.js';
import AboutImages from '../components/AboutImage.js';

function Home() {
    // Navigation to travel to the project pages
    const navigate = useNavigate();

    // Ensure that when the page loads the top of the page is what is shown 
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <NavBar/>
            <section id='Title' className='flex max-md:flex-col justify-between items-center drop-shadow-md'>
                <div className='m-auto max-sm:ml-auto'>
                    <div className='ml-32 max-xl:ml-14 max-sm:ml-auto'>
                        <h1 className='text-7xl max-lg:text-6xl max-md:text-4xl m-auto mt-5 max-md:mt-1 pt-10 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Darien Labbe</h1>
                        <h2 className='text-4xl max-md:text-2xl m-auto mt-5 max-md:mt-1 font-semibold'>Computer Science</h2>
                        <h2 className='text-3xl max-md:text-xl m-auto mt-5 max-md:mt-1 font-semibold text-t-main/70'>Aspiring Software Engineer</h2>
                        <div className='flex text-t-dark mt-10 max-md:mt-3'>
                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/darienlabbe/' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 duration-200 hover:text-linkedin-hover hover:scale-110'><AiFillLinkedin/></a>
                            <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 duration-200 hover:text-github-hover hover:scale-110'><AiFillGithub/></a>
                            <a href='mailto:darienlabbe@gmail.com' className='cursor-pointer text-4xl max-md:text-2xl mr-20 max-md:mr-10 hover:text-highlight duration-200 hover:scale-110'><LuMail/></a>
                        </div>
                        <div className='flex pt-10'>
                            <a target='_blank' rel="noreferrer" href='Darien-Labbe-Resume.pdf' className='bg-gradient-to-r from-primary to-secondary text-white/70 rounded-md p-3 text-lg font-semibold duration-200 hover:text-white hover:scale-110'>Download CV</a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center m-auto items-center bg-gradient-to-b from-primary to-white rounded-full max-lg:scale-75 lg:mt-10 border-primary border-2 drop-shadow-lg'>
                    <img src='perfil.png' className='relative rounded-full' alt='profile of me'/>
                </div>
            </section>
            <section id='Projects' className='py-10 drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Projects</h1>
                    <p className='font-light tracking-wide mx-6 text-center'>Click on a project to learn more:</p>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1000px] m-auto'>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 px-16'>
                        <button onClick={() => navigate("/Biosound")}><ProjectImages href='../pages/Biosound.js' src='biosound.png'/></button>
                        <button onClick={() => navigate("/Autochickfeed")}><ProjectImages href='../pages/Autochickfeed.js' src='autochickfeed.png'/></button>
                        <button onClick={() => navigate("/Server")}><ProjectImages href='../pages/Server.js' src='server.png'/></button>
                        <button onClick={() => navigate("/Compvis")}><ProjectImages href='../pages/Compvis.js' src='computervision.jpg'/></button>
                        <button onClick={() => navigate("/Graphics")}><ProjectImages href='../pages/Graphics.js' src='cube.jpg'/></button>
                        <button onClick={() => navigate("/Spamorham")}><ProjectImages href='../pages/Spamorham.js' src='spamorham.jpg'/></button>
                        <button onClick={() => navigate("/Wordleguesser")}><ProjectImages href='../pages/Wordleguesser.js' src='wordleguesser.jpg'/></button>
                        <button onClick={() => navigate("/Socialmedia")}><ProjectImages href='../pages/Socialmedia.js' src='socialmedia.jpg'/></button>
                        <button onClick={() => navigate("/Worm")}><ProjectImages href='../pages/Worm.js' src='wormtitle.jpg'/></button>
                        <button onClick={() => navigate("/Website")}><ProjectImages href='../pages/Website.js' src='website.jpg'/></button>
                    </div>
                </div>
            </section>
            <section id='Skills' className='py-10 drop-shadow-md text-sm'>
                <div className='flex flex-col justify-center items-center pt-16'>
                    <h1 className='text-4xl p-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Skills</h1>
                    <p className='font-light tracking-wide mx-6 text-center'>List of my skills I have developed over the years:</p>
                </div>
                <div className='max-w-[1000px] m-auto grid grid-cols-3 max-lg:grid-cols-1 gap-2 px-16 grid-auto-rows-auto'>
                    <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:flex-col max-lg:flex'>
                        <div className='m-auto p-5 rounded-lg border-border-gray border-2 drop-shadow-lg h-full w-[270px]'>
                            <img src='programming.png' alt='programming' className='flex m-auto w-32 items-center justify-center'/>
                            <p className='font-semibold text-base'>Programming Languages (Order of Experience):</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>C++</li>
                                <li>C</li>
                                <li>Python</li>
                                <li>C#</li>
                                <li>MySQL and PL/SQL</li>
                                <li>HTML</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <div className='m-auto p-5 rounded-lg border-border-gray border-2 drop-shadow-lg h-full w-[270px]'>
                            <img src='programs.png' alt='programs' className='flex m-auto w-32 items-center justify-center'/>
                            <p className='font-semibold text-base'>Programs Used:</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>VS Code</li>
                                <li>Jupyter Notebooks</li>
                                <li>Microsoft Visual Studio</li>
                                <li>Jet Brains Products</li>
                                <li>Xcode</li>
                                <li>MySQL Workbench</li>
                                <li>Oracle Apex</li>
                                <li>Blender</li>
                                <li>Adobe Products</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:pt-0 max-lg:flex-col max-lg:flex'>
                        <div className='m-auto p-5 rounded-lg border-border-gray border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                            <img src='projects.png' alt='projects' className='flex m-auto w-32 items-center justify-center'/>
                            <p className='font-semibold text-base'>Projects:</p>
                            <p>I have completed well over 50+ projects, ranging from websites, web apps, machine learning, graphics, and many more.
                                Some projects include:</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>The BioSoundSCape Project</li>
                                <li>The Automatic Chicken Feeder Project</li>
                                <li>And many more as listed above!</li>
                            </ul>
                        </div>
                        <div className='m-auto p-5 rounded-lg border-border-gray border-2 drop-shadow-lg h-full w-[270px]'>
                            <img src='skills.png' alt='skills' className='flex m-auto w-28 items-center justify-center'/>
                            <p className='font-semibold text-base'>Other Key Skills:</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>Proficient in Linux Command Line</li>
                                <li>Experience in leadership and coaching roles</li>
                                <li>Work well in Teams</li>
                                <li>Experience developing a wide variety of projects of various sizes</li>
                                <li>Speak a little French and Spanish</li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:pt-0 max-lg:flex-col max-lg:flex'>
                        <div className='m-auto p-5 rounded-lg border-border-gray border-2 drop-shadow-lg h-full w-[270px]'>
                            <img src='jobs.png' alt='jobs' className='flex m-auto w-32 items-center justify-center'/>
                            <p className='font-semibold text-base'>Job Experience:</p>
                            <p>I have worked as a Machine Learning Research and Developer, designing a CNN to detect for sound classifications 
                                for ecosystem analysis in South Africa.</p>
                            <p className='pt-2'>I have also worked as a shift supervisor for Starbucks for over 6 years.</p>
                        </div>
                        <div className='m-auto p-5 rounded-lg border-border-gray border-2 drop-shadow-lg h-full w-[270px]'>
                            <img src='awards.png' alt='awards' className='flex m-auto w-32 items-center justify-center'/>
                            <p className='font-semibold text-base'>Awards and Activities:</p>
                            <ul className='list-disc mx-5 h-full'>
                                <li>Graduated With Distinction</li>
                                <li>Graduated with a GPA of 3.73</li>
                                <li>Voted Partner of the Quarter</li>
                                <li>Completed the Starbucks North Bay SSV ADP (a development program for leaders)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id='About' className='py-10 drop-shadow-md max-w-[1600px] m-auto'>
                <div className='grid justify-center items-center pt-16'>
                    <h1 className='text-4xl p-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>About</h1>
                </div>
                <div className='flex space-x-8 mx-96 max-xl:mx-20 max-md:mx-10 max-md:flex-col pt-10 items-center'>
                    <AboutImages src='about.jpg'/>
                    <div className='grid grid-col-1'>
                        <h1 className='font-semibold text-lg max-md:pt-10'>Hi I'm Darien,</h1>
                        <p className='pt-2'>I am a computer science major with experience in machine learning, full stack development, database management, graphics, 
                            and more. I currently work as a machine learning research and developer for the BioSoundSCape Project which you can learn more about above.
                            While I am currently in the machine learning and AI industry, I am still very fascinated by the rest of the computer science field and I 
                            would love to dive into almost any opportunity I can get. I have experience working in a team environment, leadership, and coaching roles.
                            I am a hard worker, I take pride in everything I do, and I am always looking to learn more. As my future in tech marches closer and closer, 
                            I cannot wait to see what I might have the ability to create.</p>
                    </div>
                </div>
            </section>
            <section id='Contact' className='py-10 drop-shadow-md'>
                <div className='flex flex-col justify-center items-center pt-16'>
                    <h1 className='text-4xl p-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Contact</h1>
                    <p className='font-light tracking-wide mx-6 text-center mb-11'>Feel free to reach out!</p>
                    <div className='flex max-md:flex-col max-md:space-x-0 max-md:space-y-3 mb-14 items-center justify-center space-x-10 font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                        <div className='flex items-center'>
                            <LuAtSign className='mx-1 text-xl text-primary'/>
                            <p>darienlabbe@gmail.com</p>
                        </div>
                        <div className='flex items-center'>
                            <FaLocationDot className='mx-1 text-2xl text-middle'/>
                            <p>Sonoma County, CA</p>
                        </div>
                    </div>
                    <div className='flex text-t-dark'>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/darienlabbe/' className='cursor-pointer text-4xl mx-10 max-md:text-2xl duration-200 hover:text-linkedin-hover hover:scale-110'><AiFillLinkedin/></a>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe' className='cursor-pointer text-4xl mx-10 max-md:text-2xl duration-200 hover:text-github-hover hover:scale-110'><AiFillGithub/></a>
                        <a href='mailto:darienlabbe@gmail.com' className='cursor-pointer text-4xl max-md:text-2xl mx-10 hover:text-highlight duration-200 hover:scale-110'><LuMail/></a>
                    </div>
                </div>
            </section>
            <section id='Footer' className='w-full mt-24 text-white bg-footer-color h-60 content-center'>
                <h1 className='flex justify-center items-center text-4xl py-4 font-bold'>Darien Labbe</h1>
                <p className='flex justify-center items-center text-xl py-4 text-center max-md:text-sm'>Created by Darien Labbe - Updated 05/24/2024</p>
            </section>
        </div>
    );
}

export default Home;