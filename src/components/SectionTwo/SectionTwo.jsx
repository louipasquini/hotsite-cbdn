import React from "react";
import ReactPlayer from "react-player";
import SectionThree from "../SectionThree/SectionThree";
import './SectionTwo.css';

const SectionTwo = ({ fakeModel , originalCBDN , cbdnOn , setCbdnOn}) => {
    const previousText = <h4 style={{
        color: cbdnOn ? originalCBDN.mainFontColor : 'gray',
        fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
        width: '40%',
        fontSize: cbdnOn ? originalCBDN.textFontSize : fakeModel.textFontSize
    }}>Uma das confederações esportivas mais renomadas do Brasil é praticamente desconhecida pelos brasileiros.
    <br /><br />
    Ou vai dizer que você sabia que a CBDN lidera o programa de Gestão, Ética e Transparência do Comitê Olímpico do Brasil há 5 anos?
    Será que sabia do pioneirismo dela ao constituir uma Comissão de Atletas em 2010?
    E que, em 2023, foi premiada como a melhor prestação de contas do país, pelo instituto Sou do Esporte?</h4>
    const newText = <h4 style={{
        color: cbdnOn ? originalCBDN.mainFontColor : 'gray',
        fontFamily: cbdnOn ? originalCBDN.secondaryFont : fakeModel.secondaryFont,
        width: '60%',
        fontSize: cbdnOn ? originalCBDN.textFontSize : fakeModel.textFontSize
    }}>A Confederação Brasileira de Desportos na Neve, CBDN, administra os esportes olímpicos e paralímpicos de neve no Brasil.
    <br /><br />
    “Neve? No Brasil?” é isso mesmo!
    <br /><br />
    É graças à CBDN que brasileiros têm a oportunidade de representar nosso país em competições internacionais de esportes na neve.
    Através de esforços da confederação, como o Brasileiro Open - evento que acontece em Corralco, no Chile, onde atletas têm a chance de se preparar para grandes competições e novos talentos vão, participação após participação, se tornando atletas de alto nível - entre outras expedições promovidas em diferentes países.</h4>

    return (
    <div className="section-two" style={{
        backgroundColor: cbdnOn ? 'var(--midnight-blue)' : 'var(--snow-ice)'
    }}>
        {cbdnOn ? newText : previousText}
        <ReactPlayer controls='true' url='https://www.youtube.com/watch?v=sst0lNnmYAM'/>
        <SectionThree fakeModel={fakeModel} originalCBDN={originalCBDN} cbdnOn={cbdnOn} setCbdnOn={setCbdnOn} />
    </div>
    )
}

export default SectionTwo;