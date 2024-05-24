import React, { useEffect } from "react";
import SmallNav from "../components/SmallNav";
import LeftArrow from "../components/LeftArrow";
import { Link } from "react-router-dom";

function Website() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-dark-primary to-dark-secondary bg-clip-text text-transparent'>React Website</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/darienlabbe.github.io'><img src='website.jpg' className='hover:scale-105 cursor-pointer border-border-color-gray/10 border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-sm:w-80 m-auto' alt='website'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Project: React Portfolio Website</h1>
                            <div>
                                <p>The website you are viewing now was constructed from scratch by me. It is intended to be an extension of my resume, showcasing the projects I have 
                                    completed and talk more about who I am. I created this website using the React framework and Tailwind CSS to more easily style everything.</p><br/>
                                <p>I utilized GitHub pages to host my website and I also made sure to commit to my github regularly as I developed this site so that others can see 
                                    how I worked from a blank canvas to a fully functioning web app. If you wish to take a look at the code behind this project, click the photo to 
                                    be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden">
                <Link to='/Worm'><LeftArrow/></Link>
            </div>
            <div className="hidden justify-center items-center p-4 mb-20 space-x-10 max-2xl:flex">
                <Link to='/Worm'><LeftArrow/></Link>
            </div>
        </div>
    );
}

export default Website;