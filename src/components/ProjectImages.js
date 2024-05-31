import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';
import imageHashes from './imageHashes.json';

function ProjectImages({ src }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [jsonData, setJSONData] = useState([]);

    // Function that gets the correct blurhash based on an image source
    function setHash(src) {
        // Hash with default garbage data
        let hash = '12345678';
        
        
        // Find the right image in the json
        jsonData.map((data) => {
            // When the image is found, get the blurhash
            if(data.image === src) hash = data.blurhash;
            return null;
        })
        
        return hash;
    }

    useEffect(() => {
        setJSONData(imageHashes.images);
        
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src;

    }, [src])
    
    return (
        <>
            <div className={imageLoaded?'hidden':'flex w-[383px] h-[255px] m-auto max-lg:w-[320px] max-lg:h-[212px] max-md:w-[320px] max-md:h-[213px] max-sm:w-[240px] max-sm:h-[160px]'}>
                <Blurhash
                    hash={setHash(src)}
                    width='100%'
                    height='100%'
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} 
                    className='bg-border-gray border-border-gray border-2 drop-shadow-lg'
                />
            </div>
            <div className={!imageLoaded?'hidden':'inline'}>
                <img 
                    src={src} 
                    className='hover:scale-105 duration-200 cursor-pointer border-border-gray border-2 drop-shadow-lg rounded-lg max-w-96 max-lg:w-80 max-sm:w-60 m-auto' 
                    loading='lazy'
                    alt={src}>
                </img>
            </div>
        </>
    )
}

export default ProjectImages;