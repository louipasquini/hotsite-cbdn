import React from "react";
import './Button.css';

const Button = ({ cbdnOn , setCbdnOn }) => {

    const handleClick = (e) => {
        setCbdnOn(current => !current)
    }

    return (
        <div className="btnContainer">
            <div className="btn" onClick={handleClick} style={{
                transform: cbdnOn ? 'translateX(72px)' : 'translateX(3px)'
            }}></div>
        </div>
    )
}

export default Button;