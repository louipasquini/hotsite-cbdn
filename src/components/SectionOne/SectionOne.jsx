import React from "react";
import { useState } from "react";
import './SectionOne.css';

const SectionOne = ({fakeModel , originalCBDN , cbdnOn , setCbdnOn }) => {

    const handleClick = (e) => {
        setCbdnOn(current => !current)
    }

    return (
        <div className='section-one' style={{
            backgroundColor: cbdnOn ? originalCBDN.backgroundColor : fakeModel.backgroundColor
        }}>
            <div className="section-one-left">
                <h2 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.mainFontColor,
                    fontFamily: cbdnOn ? originalCBDN.font : fakeModel.font,
                    letterSpacing: fakeModel.letterSpacing && !cbdnOn ? fakeModel.letterSpacing : ''
                }}>
                    O QUE É
                </h2>
                <h2 style={{
                    color: cbdnOn ? originalCBDN.secondaryFontColor : fakeModel.mainFontColor,
                    fontFamily: cbdnOn ? originalCBDN.font : fakeModel.font,
                    letterSpacing: fakeModel.letterSpacing && !cbdnOn ? fakeModel.letterSpacing : ''
                }}>
                    A CBDN?
                </h2>
                <div className="section-one-line" style={{
                    backgroundColor: cbdnOn ? originalCBDN.lineColor : fakeModel.lineColor
                }}>

                </div>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
            </div>
            <div className="section-one-right">
                <img src={fakeModel.image} alt="main-poster" onClick={handleClick} />
            </div>
        </div>
    )
}

export default SectionOne;