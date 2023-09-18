import React from "react";
import LogoGenerator from "../LogoGenerator/LogoGenerator";
import './SectionThree.css';

const SectionThree = () => {
    return (
        <div className="section-three">
            <div className="section-three-left">
                <LogoGenerator />
            </div>
            <div className="section-three-right">
                <LogoGenerator />
            </div>
        </div>
    )
}

export default SectionThree;