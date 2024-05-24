import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { LuMoonStar } from 'react-icons/lu';
import { PiBracketsCurlyBold } from 'react-icons/pi';

function Biosound() {
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <div id='SmallNav' className='min-w-full sticky top-0 z-50 bg-white'>
                <section className='flex flex-col justify-between h-24'>
                    <nav>
                        <div className='drop-shadow-lg shadow-lg w-full px-4 sm:px-6 lg:px-8'>
                            <div className='flex h-[90px] items-center justify-center max-md:justify-between'>
                                <div className='flex'>
                                    <div className='flex-shrink-0 flex items-center'>
                                        <PiBracketsCurlyBold className='h-6 w-6 mr-1'/>
                                        <Link to='/' className='text-2xl flex font-bold cursor-pointer'>Darien Labbe</Link>
                                    </div>
                                    <div className='flex'>
                                        <div className='flex items-center ml-10 space-x-4'>
                                            <button className='flex text-2xl text-emerald-900 cursor-pointer hover:scale-110 hover:duration-200'><LuMoonStar/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>BioSoundSCape</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/darienlabbe/Chicken-Feeder-Senior-Project'><img src='biosound.png' className='hover:scale-105 cursor-pointer border-gray-500 border-2 border-opacity-10 drop-shadow-lg duration-200 rounded-lg' alt='BioSoundSCape'/></a>
                        <div>
                            <h1 className='text-xl font-bold pb-2'>Internship: The BioSoundSCape Project</h1>
                            <div className='text-lg'>
                                <p>The BioSoundSCape project is a NASA-funded biodiversity monitoring project in the Cape Region of South Africa. One goal of the project is to use data from autonomous,
                                    passive sound recorders placed in the field for capturing acoustic diversity, which can be linked to animal diversity and scaled with spatial mapping using NASA advanced 
                                    sensors flown in airplanes. Acoustic diversity is influenced by Biophony (e.g., insects, birds, mammals, etc), but also Anthropophony, or sounds created by humans 
                                    (e.g., people talking, cars, planes, etc.), Geophony (e.g., rain, wind, running water, etc.), and Interference, often vegetation that rub up against the microphone making 
                                    scratching sounds/blips in the audio that are unrelated to the environment being recorded. In 2023, the project partnered with rangers and volunteers to collect acoustic 
                                    data at 1,081 sites across the Cape Region in wet and dry seasons. These campaigns resulted in 909,309 minutes of recordings. Our goal in this project has been to attempt 
                                    to retrain and change a Convolutional Neural Network (CNN) to detect Anthropophony, Biophony, Geophony, and Interference. One model fine-tuned an existing CNN from research 
                                    based in Sonoma County, whereas the other used a published CNN developed for more general soundscape classification. The original CNN was discussed at length 
                                    <a target='_blank' rel="noreferrer" href='https://www.sciencedirect.com/science/article/pii/S1470160X22003028' className='text-green-600 font-bold'> here</a>.
                                    In the end we hope to develop at least one CNN that can be used as a tool for future acoustic studies in habitat-animal diversity across environmental gradients in South Africa.</p><br/>
                                <p>If you wish to take a look at the code behind this project, click the photo to be taken to the GitHub repository containing that code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Biosound;