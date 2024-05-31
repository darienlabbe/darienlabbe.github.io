import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Blurhash } from "react-blurhash";
import imageHashes from "./imageHashes.json";

function ProjectImages({ src }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [jsonData, setJSONData] = useState([]);
    var name = '';

    // Function that gets the correct blurhash based on an image source
    function setHash(src) {
        // Hash with default garbage data
        let hash = '12345678';
        
        
        // Find the right image in the json
        jsonData.map((data) => {
            // When the image is found, get the blurhash
            if(data.image === src) {
                name = '/';
                name = name + data.name;
                hash = data.blurhash;
            }
            return null;
        })
        
        return hash;
    }
    console.log(setHash(src));
    console.log(name);

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
            <div className={imageLoaded?'hidden':'flex w-[425px] h-[280px] m-auto max-lg:w-[300px] max-lg:h-[200px] max-md:w-[530px] max-md:h-[340px] max-sm:w-[260px] max-sm:h-[180px]'}>
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
                <Link to={name}><img 
                    src={src} 
                    className='hover:scale-105 duration-200 cursor-pointer border-border-gray border-2 drop-shadow-lg rounded-lg' 
                    loading='lazy'
                    alt={src}>
                </img></Link>
            </div>
        </>
    )
}

export default ProjectImages;