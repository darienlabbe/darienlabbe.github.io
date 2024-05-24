import React, { useEffect } from "react";
import SmallNav from "../components/SmallNav";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import { Link } from "react-router-dom";

function Worm() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-dark-primary to-dark-secondary bg-clip-text text-transparent'>Worm Game</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Worm-Game'><img src='worm.jpg' className='hover:scale-105 cursor-pointer border-border-color-gray/10 border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-sm:w-80 m-auto' alt='worm game'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Project: The Ascii Worm Game</h1>
                            <div>
                                <p>This project is very similar to the classic snake game where you control a little worm around, trying not to run into yourself or the wall, 
                                    while collecting the food that is randomly placed around the playing field, growing your worm larger and larger making it harder to stay 
                                    alive. This particular worm game uses W A S D controls and rather than single apples as food, a random number generator creates a score value 
                                    for each piece of food. Not only does your worm get that value of points but when collected, that value will increase the worm by that number 
                                    of lengths as well. For Instance, if you collect food of value 5, the worm would grow five lengths longer. The goal is to stay alive and eat 
                                    as much as possible and try to get the highest score.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-[50%] left-10 right-10 flex justify-between items-center p-4 max-2xl:hidden">
                <Link to='/SocialMedia'><LeftArrow/></Link>
                <Link to='/Website'><RightArrow/></Link>
            </div>
            <div className="hidden justify-center items-center p-4 mb-20 space-x-10 max-2xl:flex">
                <Link to='/SocialMedia'><LeftArrow/></Link>
                <Link to='/Website'><RightArrow/></Link>
            </div>
        </div>
    );
}

export default Worm;