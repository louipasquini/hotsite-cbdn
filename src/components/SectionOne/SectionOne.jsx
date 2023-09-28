import React from "react";
import { useState } from "react";
import './SectionOne.css';

const SectionOne = ({fakeModel , originalCBDN , cbdnOn }) => {

    return (
        <div className='section-one' style={{
            backgroundColor: cbdnOn ? originalCBDN.backgroundColor : fakeModel.backgroundColor
        }}>
            <div className="section-one-left">
                <h2 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.mainFontColor,
                    fontFamily: cbdnOn ? originalCBDN.font : fakeModel.font,
                    fontSize: cbdnOn ? originalCBDN.mainFontSize : fakeModel.mainFontSize,
                    marginBottom: cbdnOn ? '-40px' : '-20px',
                    letterSpacing: fakeModel.letterSpacing && !cbdnOn ? fakeModel.letterSpacing : ''
                }}>
                    O QUE É
                </h2>
                <h2 style={{
                    color: cbdnOn ? originalCBDN.secondaryFontColor : fakeModel.mainFontColor,
                    fontFamily: cbdnOn ? originalCBDN.font : fakeModel.font,
                    fontSize: cbdnOn ? originalCBDN.mainFontSize : fakeModel.mainFontSize,
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
                    fontSize: cbdnOn ? originalCBDN.secondFontSize : fakeModel.secondFontSize,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                    fontSize: cbdnOn ? originalCBDN.secondFontSize : fakeModel.secondFontSize,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                    fontSize: cbdnOn ? originalCBDN.secondFontSize : fakeModel.secondFontSize,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                    fontSize: cbdnOn ? originalCBDN.secondFontSize : fakeModel.secondFontSize,
                    letterSpacing: fakeModel.secondLetterSpacing && !cbdnOn ? fakeModel.secondLetterSpacing : ''
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
            </div>
            <div className="section-one-right">
                <img src={fakeModel.image} alt="main-poster" />
            </div>
        </div>
    )
}

export default SectionOne;