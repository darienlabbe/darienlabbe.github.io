import React from "react";

function Skills() {
    return (
        <div className='py-10 drop-shadow-md' id='Skills'>
            <div className='flex flex-col justify-center items-center pt-16'>
                <h1 className='text-4xl p-2 max-lg:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent'>Skills</h1>
                <p className='font-light tracking-wide mx-6 text-center'>List of my skills I have developed over the years</p>
            </div>
            <div className='max-w-[1000px] m-auto grid grid-cols-3 max-lg:grid-cols-1 gap-2 px-16 grid-auto-rows-auto'>
                <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:flex-col max-lg:flex'>
                    <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                        <p className='font-semibold'>Programming Languages (Order of Experience):</p>
                        <ul className='list-disc mx-5 h-full'>
                            <li>C++</li>
                            <li>C</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                        <p className='font-semibold'>Programs Used:</p>
                        <ul className='list-disc mx-5 h-full'>
                            <li>VS Code</li>
                            <li>Microsoft Visual Studio</li>
                            <li>Clion</li>
                            <li>Xcode</li>
                            <li>MySQL</li>
                            <li>Oracle Apex</li>
                            <li>Adobe Products</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:pt-0 max-lg:flex-col max-lg:flex'>
                    <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                        <p className='font-semibold'>Projects:</p>
                        <p className='h-full'>I have completed well over 50+ projects, ranging from websites, webapps, Machine Learning, Graphics, and many more.</p>
                    </div>
                    <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                        <p className='font-semibold'>Other Key Skills:</p>
                        <ul className='list-disc mx-5 h-full'>
                            <li>Microsoft Visual Studio</li>
                            <li>Clion</li>
                            <li>Proficient in Linix Command Line</li>
                            <li>Experience in leadership roles</li>
                            <li>Work well in Teams</li>
                            <li>Work well with others</li>
                            <li>Speak a little French and Spanish</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-2 h-full pt-5 max-lg:pt-0 max-lg:flex-col max-lg:flex'>
                    <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                        <p className='font-semibold'>Job Experience:</p>
                        <p className='h-full'>I have worked as a Machine Learning Research and Developer, designing a CNN to detect for sound classifications for ecosystem analysis in South Africa</p>
                    </div>
                    <div className='m-auto p-5 rounded-lg border-gray-500 border-2 border-opacity-10 drop-shadow-lg h-full w-[270px]'>
                        <p className='font-semibold'>Awards and Activites:</p>
                        <ul className='list-disc mx-5 h-full'>
                            <li>Graduated With Distinction</li>
                            <li>Voted Partner of the Quater</li>
                            <li>Completed the Starbucks North Bay SSV ADP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;