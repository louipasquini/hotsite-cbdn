import React from "react";
import ReactPlayer from "react-player";
import './SectionTwo.css';

const SectionTwo = () => { 
    return (
    <div className="section-two">
        <ReactPlayer controls='true' url='https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D'/>
    </div>
    )
}

export default SectionTwo;