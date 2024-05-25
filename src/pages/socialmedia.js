import React, { useEffect } from "react";
import SmallNav from "../components/SmallNav";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import { Link } from "react-router-dom";

function SocialMedia() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Social Media Project</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Our-Space'><img src='socialmedia.jpg' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto' alt='our space social media'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Project: My Social Media</h1>
                            <div className='text-base max-md:text-sm'>
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
            <div className='max-2xl:h-40'>
                <div className="fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/WordleGuesser'><LeftArrow/></Link>
                </div>
                <div className="fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/Worm'><RightArrow/></Link>
                </div>
                <div className="hidden justify-center items-center p-4 space-x-10 max-2xl:flex">
                    <Link to='/WordleGuesser'><LeftArrow/></Link>
                    <Link to='/Worm'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;