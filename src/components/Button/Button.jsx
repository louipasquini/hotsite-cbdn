import React from "react";
import './Button.css';

const Button = ({ cbdnOn , setCbdnOn }) => {

    const handleClick = (e) => {
        setCbdnOn(current => !current)
    }

    return (
        <>
            <h5 style={{
                color: cbdnOn ? 'var(--snow-ice)' : 'gray',
                width: '7%',
                fontFamily: 'PragmaticaLight',
                lineHeight: '20px',
                marginTop: '80px'
            }}>Veja o Brasil na neve</h5>
            <div className="btnContainer">
                <div className="btn" onClick={handleClick} style={{
                    transform: cbdnOn ? 'translateX(72px)' : 'translateX(3px)'
                }}></div>
            </div>
        </>
    )
}

export default Button;