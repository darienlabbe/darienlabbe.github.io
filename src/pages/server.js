import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmallNav from '../components/SmallNav.js';
import LeftArrow from '../components/LeftArrow.js';
import RightArrow from '../components/RightArrow.js';
import ProjectImages from '../components/ProjectImages.js';

function Server() {
    // Ensure that when the page loads the top of the page is what is shown
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <div>
            <SmallNav/>
            <div className='drop-shadow-md'>
                <div className='flex flex-col justify-center items-center py-7 pt-16'>
                    <h1 className='text-4xl max-md:text-2xl max-sm:text-xl p-2 font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Home NAS Server using Ubuntu</h1>
                </div>
                <div className='flex flex-col justify-between items-center max-w-[1300px] m-auto pb-20'> 
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8 px-16 items-center'>
                        <ProjectImages src='server.png'/>
                        <div>
                            <h1 className='text-xl max-md:text-lg font-bold pb-2'>Project: Home NAS Server</h1>
                            <div className='text-base max-md:text-sm'>
                                <p>This project was started to solve a problem that I was having, I had too many photos and not enough space for them all. I had completely
                                    run out of room in my google photos account and I did not want to have to pay for more storage. So I decided to create my own home NAS server.</p><br/>
                                <p>After a large amount of research I started scouring ebay, Craigslist, facebook marketplace, and many other places for cheap computer parts that 
                                    I could use for my server. I ended up finding everything that I needed and was able to put together a rather powerful computer without breaking 
                                    the bank. I put it all together and then installed Linux Ubuntu as the operating system.</p><br/>
                                <p>With Ubuntu installed, I then used the two hard drives I was able to procure and set them up in RAID 1, also known as Disk Mirroring. Even with 
                                    loosing half of my available storage space to the mirror drive, I still had plenty of space to more than solve the issues I was running into.</p><br/>
                                <p>Now with an Ubuntu Computer setup with redundant storage, I was able to setup Samba in order to share a drive folder with other computers on my 
                                    local network. This allowed me to transfer over all of my photos, videos, and old projects to my server with ease, ensuring a higher level of 
                                    safety and security for all of my virtual things.</p><br/>
                                <p>To further protect the integrity of my server and the files I now stored on it, I invested in an Uninterruptible Power Supply or UPS which is 
                                    essentially a large battery that exists inbetween the wall power and my server. Should the power go out, my server can keep running for long 
                                    enough for me to access it and safely shut it down. I also ensured to invest in a line interactive UPS which helps ensure that the power entering 
                                    my server is uniform and not dirty power, full of sound from other devices in my home.</p><br/>
                                <p>To further dive into my server building project, I decided to learn about docker containers. I ended up creating a docker compose container in order 
                                    to run an instance of PhotoPrism which allowed me to view all of my photos and videos very similarly to google photos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-2xl:h-40'>
                <div className='fixed bottom-[50%] left-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/AutoChickFeed'><LeftArrow/></Link>
                </div>
                <div className='fixed bottom-[50%] right-10 flex justify-between items-center p-4 max-2xl:hidden'>
                    <Link to='/CompVis'><RightArrow/></Link>
                </div>
                <div className='hidden justify-center items-center p-4 space-x-10 max-2xl:flex'>
                    <Link to='/AutoChickFeed'><LeftArrow/></Link>
                    <Link to='/CompVis'><RightArrow/></Link>
                </div>
            </div>
        </div>
    );
}

export default Server;