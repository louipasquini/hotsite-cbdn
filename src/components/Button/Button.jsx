import React from "react";
import './Button.css';

const Button = ({ children , btnFunction }) => {
    return <button onClick={btnFunction} className="btn">{ children }</button>
}

export default Button;