import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SmallNav from "../components/SmallNav";
import RightArrow from "../components/RightArrow";

function Biosound() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>BioSoundSCape</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center drop-shadow-md'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/CS-479/tree/main/BioSoundSCape'><img src='biosound.png' className='hover:scale-105 cursor-pointer border-border-gray border-2 drop-shadow-lg duration-200 rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto' alt='BioSoundSCape'/></a>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Internship: The BioSoundSCape Project</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>The BioSoundSCape project is a NASA-funded biodiversity monitoring project in the Cape Region of South Africa. One goal of the project is to use data from autonomous,
                                    passive sound recorders placed in the field for capturing acoustic diversity, which can be linked to animal diversity and scaled with spatial mapping using NASA advanced 
                                    sensors flown in airplanes. Acoustic diversity is influenced by Biophony (e.g., insects, birds, mammals, etc), but also Anthropophony, or sounds created by humans 
                                    (e.g., people talking, cars, planes, etc.), Geophony (e.g., rain, wind, running water, etc.), and Interference, often vegetation that rub up against the microphone making 
                                    scratching sounds/blips in the audio that are unrelated to the environment being recorded. In 2023, the project partnered with rangers and volunteers to collect acoustic 
                                    data at 1,081 sites across the Cape Region in wet and dry seasons. These campaigns resulted in 909,309 minutes of recordings. Our goal in this project has been to attempt 
                                    to retrain and change a Convolutional Neural Network (CNN) to detect Anthropophony, Biophony, Geophony, and Interference. One model fine-tuned an existing CNN from research 
                                    based in Sonoma County, whereas the other used a published CNN developed for more general soundscape classification. The original CNN was discussed at length 
                                    <a target='_blank' rel="noreferrer" href='https://www.sciencedirect.com/science/article/pii/S1470160X22003028' className='text-t-link font-bold'> here</a>.
                                    In the end we hope to develop at least one CNN that can be used as a tool for future acoustic studies in habitat-animal diversity across environmental gradients in South Africa.</p><br/>
                                <p>This project is still a work in progress so the only code we have public was the work we did during the CS 479 course (as of writting this). This being said, we will hopefully 
                                    change that in the near future so that people can view our progress. We will also hopefully be working towards developing a research paper to discuss our findings at length. 
                                    Furthermore, we will be presenting our progress at the AAAS-PD conference at San Diego University (June 18th), so if you are there, come check out our project poster! If you 
                                    wish to take a look at the code previously developed for this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-2xl:h-40'>
                <div className="fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden">
                    <Link to='/AutoChickFeed'><RightArrow/></Link>
                </div>
                <div className="hidden justify-center items-center p-4 space-x-10 max-2xl:flex">
                    <Link to='/AutoChickFeed'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default Biosound;