import React from "react";

function LeftArrow() {
    return (
        <button className="bg-border-color-gray/30 hover:bg-border-color-gray hover:scale-110 duration-200 text-white py-2 px-4 rounded">
            <img src='arrow.png' className='w-10'/>
        </button>
    );
}

export default LeftArrow;