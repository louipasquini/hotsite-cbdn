import React from "react";
import { useState } from "react";
import './SectionOne.css';

const SectionOne = () => {

    const fakeCBDNModels = [{
        model: 'CONFEDERAÇÃO BRASILEIRA DE DESENVOLVIMENTO NATURAL',
        backgroundColor: '#D4BF9D',
        mainFontColor: '#3C2922',
        secondaryFontColor: '#3C2922',
        lineColor: '#3C2922',
        font: 'OrbitronBold',
        secondaryFont: 'OrbitronBold',
        image: 'src/assets/CBDN1.png'
    },{
        model: 'CURSO BALÍSTICO DA NAÇÃO',
        backgroundColor: '#212E5E',
        mainFontColor: '#E9C800',
        secondaryFontColor: '#E5E5E6',
        lineColor: '#058034',
        font: 'OrbitronBold',
        secondaryFont: 'OrbitronBold',
        image: 'src/assets/CBDN2.png'
    },{
        model: 'CONFEDERAÇÃO DOS BANCOS DA NAÇÃO',
        backgroundColor: '#233874',
        mainFontColor: '#EDEEF0',
        secondaryFontColor: '#EDEEF0',
        lineColor: '#EECE00',
        font: 'HelveticaNeue67',
        secondaryFont: 'HelveticaNeue67',
        image: 'src/assets/CBDN3.png'
    },{
        model: 'COLETIVO BRASILEIRO DOS DETETIVES NOTURNOS',
        backgroundColor: '#EDE5D4',
        mainFontColor: '#D2161C',
        secondaryFontColor: '#304591',
        lineColor: '#304591',
        font: 'BettyNoir',
        secondaryFont: 'BettyNoir',
        image: 'src/assets/CBDN4.png'
    },{
        model: 'COMPANHIA BRASILEIRA DE DIMENSÃO NORTE',
        backgroundColor: '#00612C',
        mainFontColor: '#E9C800',
        secondaryFontColor: 'white',
        lineColor: 'white',
        font: 'HelveticaNeue',
        secondaryFont: 'HelveticaNeue',
        image: 'src/assets/CBDN5.png'
    },{
        model: 'CONFEDERAÇÃO BRASILEIRA DE DADOS NAVAIS',
        backgroundColor: '#5F100E',
        mainFontColor: '#E9C800',
        secondaryFontColor: '#E9C800',
        lineColor: '#E9C800',
        font: 'BlockMarys',
        secondaryFont: 'HelveticaNeue',
        image: 'src/assets/CBDN6.png'
    },{
        model: 'CONFEDERAÇÃO DOS BISPOS DA NAÇÃO',
        backgroundColor: '#31448F',
        mainFontColor: '#EBEAEA',
        secondaryFontColor: '#D4D0C5',
        lineColor: '#D4D0C5',
        font: 'BisposBold',
        secondaryFont: 'BisposBold',
        image: 'src/assets/CBDN7.png'
    },{
        model: 'COLETIVO DOS BOTAFOGUENSES DIRETAMENTE DE NAIRÓBI',
        backgroundColor: '#CFCCC1',
        mainFontColor: '#191918',
        secondaryFontColor: '#191918',
        lineColor: '#191918',
        font: 'DharmaGothic',
        secondaryFont: 'DharmaGothic',
        image: 'src/assets/CBDN8.png'
    }]

    const originalCBDN = {
        model: 'CONFEDERAÇÃO BRASILEIRA DE DESPORTOS NA NEVE',
        backgroundColor: 'var(--midnight-blue)',
        mainFontColor: 'var(--snow-ice)',
        secondaryFontColor: 'var(--middle-yellow)',
        lineColor: 'var(--snow-ice)',
        font: 'KenyanCoffee-Bold',
        secondaryFont: 'PragmaticaLight',
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    shuffleArray(fakeCBDNModels)

    const fakeModel = fakeCBDNModels.pop()

    const [cbdnOn,setCbdnOn] = useState(false)

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
                    fontFamily: cbdnOn ? originalCBDN.font : fakeModel.font
                }}>
                    O QUE É
                </h2>
                <h2 style={{
                    color: cbdnOn ? originalCBDN.secondaryFontColor : fakeModel.mainFontColor,
                    fontFamily: cbdnOn ? originalCBDN.font : fakeModel.font
                }}>
                    A CBDN?
                </h2>
                <div className="section-one-line" style={{
                    backgroundColor: cbdnOn ? originalCBDN.lineColor : fakeModel.lineColor
                }}>

                </div>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont
                }}>
                    {cbdnOn ? originalCBDN.model : fakeModel.model}
                </h4>
                <h4 style={{
                    color: cbdnOn ? originalCBDN.mainFontColor : fakeModel.secondaryFontColor,
                    fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont
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