import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallNav from '../components/SmallNav.js';
import LeftArrow from '../components/LeftArrow.js';
import RightArrow from '../components/RightArrow.js';
import ProjectImages from '../components/ProjectImages.js';

function SpamOrHam() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Spam or Ham?</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/darienlabbe/Spam-Detection'><ProjectImages src='spamorham.jpg'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Project: The Spam Detection Program</h1>
                            <div className='text-base max-md:text-sm'>
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
            <div className='max-2xl:h-40'>
                <div className='fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/Graphics'><LeftArrow/></Link>
                </div>
                <div className='fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/WordleGuesser'><RightArrow/></Link>
                </div>
                <div className='hidden justify-center items-center p-4 space-x-10 max-2xl:flex'>
                    <Link to='/Graphics'><LeftArrow/></Link>
                    <Link to='/WordleGuesser'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default SpamOrHam;