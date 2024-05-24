import React from "react";

function RightArrow() {
    return (
        <button className="bg-gray-300 hover:bg-gray-400 hover:scale-110 duration-200 text-white py-2 px-4 rounded">
            <img src='arrowRight.png' className='w-10'/>
        </button>
    );
}

export default RightArrow;