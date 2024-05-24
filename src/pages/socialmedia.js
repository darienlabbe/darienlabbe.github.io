import React, { useEffect } from "react";
import SmallNav from "../components/SmallNav";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import { Link } from "react-router-dom";

function SocialMedia() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Social Media Project</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Our-Space'><img src='socialmedia.jpg' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg max-w-96 max-sm:w-80 m-auto' alt='our space social media'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Project: My Social Media</h1>
                            <div>
                                <p>This social media project was a class project where I needed to create a program that could parse a ".json" file and create user html files. 
                                    Storing their location, profile image, who they follow, who follows them, and who their mutuals are. All of this information is then put 
                                    together and linked so that from the home page you can visit all the users in the social media and also click on the user pages from that 
                                    user's follow list, followers list, and mutuals list.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-[50%] left-10 right-10 flex justify-between items-center p-4 max-2xl:hidden">
                <Link to='/WordleGuesser'><LeftArrow/></Link>
                <Link to='/Worm'><RightArrow/></Link>
            </div>
            <div className="hidden justify-center items-center p-4 mb-20 space-x-10 max-2xl:flex">
                <Link to='/WordleGuesser'><LeftArrow/></Link>
                <Link to='/Worm'><RightArrow/></Link>
            </div>
        </div>
    );
}

export default SocialMedia;