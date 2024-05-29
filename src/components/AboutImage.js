import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import imageHashes from "./imageHashes.json";

function AboutImages({ src }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [jsonData, setJSONData] = useState([]);
    
    // Use the json to set the value of the json object state
    
    // Function that gets the correct blurhash based on an image source
    function setHash(src) {
        // Hash with default garbage data
        let hash = '12345678';
        
        // Find the right image in the json
        jsonData.map((data) => {
            // When the image is found, get the blurhash
            if(data.name === src) hash = data.blurhash;
            return null;
        })
        
        return hash;
    }
    
    
    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src;

        setJSONData(imageHashes.images);
    }, [src])

    return (
        <>
            <div className={imageLoaded?'hidden':'inline'}>
                <Blurhash
                    hash={setHash(src)}
                    width='100%'
                    height='100%'
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} 
                    className='grid max-w-60 rounded-lg border-border-gray border-2 drop-shadow-lg'
                    loading='lazy'
                />
            </div>
            <div className={!imageLoaded?'hidden':'inline'}>
                <img 
                    src={src} 
                    className='grid max-w-60 rounded-lg border-border-gray border-2 drop-shadow-lg' 
                    loading='lazy'
                    alt=''>
                </img>
            </div>
        </>
    )
}

export default AboutImages;