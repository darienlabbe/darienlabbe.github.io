import React, { useEffect } from "react";
import SmallNav from "../components/SmallNav";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import { Link } from "react-router-dom";

function SpamOrHam() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-dark-primary to-dark-secondary bg-clip-text text-transparent'>Spam or Ham?</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Spam-Detection'><img src='spamorham.jpg' className='hover:scale-105 cursor-pointer border-border-color-gray/10 border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-sm:w-80 m-auto' alt='spam or not project'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Project: The Spam Detection Program</h1>
                            <div>
                                <p>This project is a very rudimentary program that uses binary dictionaries and uses the Bayes theorem to determine the probability of an 
                                    email being either spam or "ham" (not spam).</p><br/>
                                <p>The Naïve Bayes Spam Filter equation takes the probability of a spam occurring (P(A)), the probability of spam not occurring (P(B)), the 
                                    conditional probability of a spam email occurring, given that a specific email is not spam also occurs (P(A/B)), and the conditional 
                                    probability of event spam not occurring, given that a specific email is spam also occurs (P(B/A)). This forms into the equation: 
                                    P(A|B) = P(B|A) * P(A) / P(B)</p><br/>
                                <p>The conditional probability (P(A/B)) is what then determines if the email is considered to be spam or not spam.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-[50%] left-10 right-10 flex justify-between items-center p-4 max-2xl:hidden">
                <Link to='/Graphics'><LeftArrow/></Link>
                <Link to='/WordleGuesser'><RightArrow/></Link>
            </div>
            <div className="hidden justify-center items-center p-4 mb-20 space-x-10 max-2xl:flex">
                <Link to='/Graphics'><LeftArrow/></Link>
                <Link to='/WordleGuesser'><RightArrow/></Link>
            </div>
        </div>
    );
}

export default SpamOrHam;