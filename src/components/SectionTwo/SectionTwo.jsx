import React from "react";
import { useRef } from 'react';
import ReactPlayer from "react-player";
import Button from "../Button/Button";
import './SectionTwo.css';

const SectionTwo = ({ fakeModel , originalCBDN , cbdnOn , setCbdnOn}) => {
    const previousText = <h4 style={{
        color: cbdnOn ? originalCBDN.mainFontColor : 'gray',
        fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
    }}>Uma das confederações esportivas mais renomadas do Brasil é praticamente desconhecida pelos brasileiros.
    <br /><br />
    Ou vai dizer que você sabia que a CBDN lidera o programa de Gestão, Ética e Transparência do Comitê Olímpico do Brasil há 5 anos?
    Será que sabia do pioneirismo dela ao constituir uma Comissão de Atletas em 2010?
    E que, em 2023, foi premiada como a melhor prestação de contas do país, pelo instituto Sou do Esporte?</h4>

    const newText = <h4 style={{
        color: cbdnOn ? originalCBDN.mainFontColor : 'gray',
        fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
    }}>A Confederação Brasileira de Desportos na Neve, CBDN, administra os esportes olímpicos e paralímpicos de neve no Brasil.
    <br /><br />
    “Neve? No Brasil?” é isso mesmo!
    <br /><br />
    É graças à CBDN que brasileiros têm a oportunidade de representar nosso país em competições internacionais de esportes na neve.
    Através de esforços da confederação, como o Brasileiro Open - evento que acontece em Corralco, no Chile, onde atletas têm a chance de se preparar para grandes competições e novos talentos vão, participação após participação, se tornando atletas de alto nível - entre outras expedições promovidas em diferentes países.</h4>

    const windowWidth = useRef(window.innerWidth)

    let widthVideo = ''
    let heightVideo = ''

    if (windowWidth.current > 1080) {
        widthVideo = '60%'
        heightVideo = '600px'
    } else if (windowWidth.current > 800 && windowWidth.current < 1080) {
        widthVideo = '60%'
        heightVideo = '300px'
    } else {
        widthVideo = '80%'
        heightVideo = '200px'
    }

    return (
    <div className="section-two" style={{
        backgroundColor: cbdnOn ? 'var(--midnight-blue)' : 'var(--snow-ice)'
    }}>
        {cbdnOn ? newText : previousText}
        <ReactPlayer style={{
            marginBottom: '60px',
        }} width={widthVideo} height={heightVideo} controls='true' url='https://www.youtube.com/watch?v=sst0lNnmYAM'/>
        <h4 style={{
                fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
                color: cbdnOn ? originalCBDN.mainFontColor : 'grey',
                textAlign: 'center',
                margin: 0,
                width: windowWidth.current > 800 ? '60%' : '80%',
                marginBottom: '10px'
            }}>Fomos às ruas e constatamos: a CBDN já é reconhecida, só falta ser conhecida.</h4>
            <div><svg style={{
                fill: cbdnOn ? originalCBDN.secondaryFontColor : 'grey',
                margin: '3px'
            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg style={{
                fill: cbdnOn ? originalCBDN.secondaryFontColor : 'grey',
                margin: '3px'
            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg style={{
                fill: cbdnOn ? originalCBDN.secondaryFontColor : 'grey',
                margin: '3px'
            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg style={{
                fill: cbdnOn ? originalCBDN.secondaryFontColor : 'grey',
                margin: '3px'
            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><svg style={{
                fill: cbdnOn ? originalCBDN.secondaryFontColor : 'grey',
                margin: '3px'
            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></div>
            <h1 style={{
                color: cbdnOn ? originalCBDN.mainFontColor : 'grey',
                fontFamily: cbdnOn ? 'PragmaticaBold' : fakeModel.secondaryFont,
                marginTop: '60px',
                fontSize: windowWidth.current > 1080 ? '5dvw' : '9dvw'
            }}>Prazer,</h1>
            <h1 style={{
                color: cbdnOn ? originalCBDN.secondaryFontColor : 'grey',
                fontFamily: cbdnOn ? 'PragmaticaBold' : fakeModel.secondaryFont,
                fontSize: windowWidth.current > 1080 ? '5dvw' : '9dvw'
            }}>CBDN!</h1>
        <Button cbdnOn={cbdnOn} setCbdnOn={setCbdnOn} />
    </div>
    )
}

export default SectionTwo;