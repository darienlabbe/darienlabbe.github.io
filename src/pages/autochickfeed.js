import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SmallNav from '../components/SmallNav.js';
import LeftArrow from "../components/LeftArrow.js";
import RightArrow from "../components/RightArrow.js";

function AutoChickFeed() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-dark-primary to-dark-secondary bg-clip-text text-transparent'>The Automatic Chicken Feeder</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center text-text-color-dark'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Chicken-Feeder-Senior-Project'><img src='autochickfeed.png' className='hover:scale-105 cursor-pointer border-border-color-gray/10 border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-sm:w-80 m-auto' alt='automatic chicken feeder'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Project: The Automatic Chicken Feeder</h1>
                            <div>
                                <p>This is my Sonoma State University Computer Science Capstone project. Over the course of several months I developed a React web app hosted 
                                    on a Raspberry Pi 4B that is connected to a relay to switch a motor on and off in order to automatically feed chickens. </p><br/>
                                <p>I created a video presentation where I go over my project where I go into my project in depth. If you wish to view this video and learn more  
                                    about my project I uploaded my presentation to YouTube and you can watch it
                                    <a target='_blank' rel="noreferrer" href='https://youtu.be/hTrQwCQ2fgw' className='text-text-hyperlink font-bold'> here</a>.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-[50%] left-10 right-10 flex justify-between items-center p-4 max-2xl:hidden">
                <Link to='/Biosound'><LeftArrow/></Link>
                <Link to='/Server'><RightArrow/></Link>
            </div>
            <div className="hidden justify-center items-center p-4 mb-20 space-x-10 max-2xl:flex">
                <Link to='/Biosound'><LeftArrow/></Link>
                <Link to='/Server'><RightArrow/></Link>
            </div>
        </div>
    );
}

export default AutoChickFeed;