import React, { useEffect } from "react";
import SmallNav from "../components/SmallNav";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import { Link } from "react-router-dom";

function WordleGuesser() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Wordle Guesser</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Wordle-Guesser'><img src='wordleguesser.jpg' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto' alt='wordle guesser'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Project: Wordle Guessing Program</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>This project involves the popular game "Wordle" where the program guesses what the correct Wordle guess is. The program works by using a 
                                    starter word and with each guess it adds to command that searches through a dictionary of all possible words. The guesser then picks out a 
                                    random word from the smaller available list, shortening until finally the right answer is gotten. The program averages at 4-4.5 guesses in 
                                    order to guess correctly.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-2xl:h-40'>
                <div className="fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/SpamOrHam'><LeftArrow/></Link>
                </div>
                <div className="fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/SocialMedia'><RightArrow/></Link>
                </div>
                <div className="hidden justify-center items-center p-4 space-x-10 max-2xl:flex">
                    <Link to='/SpamOrHam'><LeftArrow/></Link>
                    <Link to='/SocialMedia'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default WordleGuesser;