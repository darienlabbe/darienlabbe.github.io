import React from "react";

function About() {
    return (
        <div className='py-10 drop-shadow-md' id='About'>
            <div className='flex flex-col justify-center items-center pt-16'>
                <h1 className='text-4xl p-2 max-md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>About</h1>
            </div>
            <div className='flex flex-row max-md:flex-col justify-center items-center mx-96 max-2xl:mx-32 max-lg:mx-20 max-md:mx-auto'>
                <img className='flex items-center max-w-[400px] max-lg:max-w-[200px] rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg' src='about.jpg' alt='about'/>
                <div className='flex flex-col justify-center max-md:items-center p-5 mx-4'>
                    <h1 className="flex ">Hi I'm Darien</h1>
                    <p className='flex'>I am a computer science student studying at Sonoma State University with the prospect of receiving my Bachelors of Science in Computer Science by May 2024. I have yet to narrow my focus onto any particular path in computer science, however, I have a very open mind and I cannot wait to see what I will get the opportunity to be able to create.</p>
                </div>
            </div>
        </div>
    );
}

export default About;