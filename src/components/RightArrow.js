import React from "react";

function RightArrow() {
    return (
        <button className="bg-arrow-bg/30 hover:bg-arrow-bg/70 hover:scale-110 duration-200 text-white py-2 px-4 rounded">
            <img src='arrowRight.png' className='w-10'/>
        </button>
    );
}

export default RightArrow;