import React, { useEffect } from "react";
import SmallNav from '../components/SmallNav.js';

function AutoChickFeed() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>The Automatic Chicken Feeder</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Chicken-Feeder-Senior-Project'><img src='autochickfeed.png' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg max-w-96 m-auto mb-20' alt='automatic chicken feeder'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Project: The Automatic Chicken Feeder</h1>
                            <div className='mb-20'>
                                <p>This is my Sonoma State University Computer Science Capstone project. Over the course of several months I developed a React web app hosted 
                                    on a Raspberry Pi 4B that is connected to a relay to switch a motor on and off in order to automatically feed chickens. </p><br/>
                                <p>I created a video presentation where I go over my project where I go into my project in depth. If you wish to view this video and learn more  
                                    about my project I uploaded my presentation to YouTube and you can watch it
                                    <a target='_blank' rel="noreferrer" href='https://youtu.be/hTrQwCQ2fgw' className='text-green-600 font-bold'> here</a>.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AutoChickFeed;