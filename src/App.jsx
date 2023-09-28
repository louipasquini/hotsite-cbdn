import React from 'react';
import { useState } from 'react';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import './App.css';
import Posters from './components/Posters/Posters';
import cbdn1 from './assets/CBDN1.png';
import cbdn2 from './assets/CBDN2.png';
import cbdn3 from './assets/CBDN3.png';
import cbdn4 from './assets/CBDN4.png';
import cbdn5 from './assets/CBDN5.png';
import cbdn6 from './assets/CBDN6.png';
import cbdn7 from './assets/CBDN7.png';
import cbdn8 from './assets/CBDN8.png';

const App = () => {

    const fakeCBDNModels = [{
      model: 'CONFEDERAÇÃO BRASILEIRA DE DESENVOLVIMENTO NATURAL',
      backgroundColor: '#D4BF9D',
      mainFontColor: '#3C2922',
      secondaryFontColor: '#3C2922',
      lineColor: '#3C2922',
      font: 'OrbitronBold',
      secondaryFont: 'HelveticaNeue',
      image: cbdn1,
  },{
      model: 'CURSO BALÍSTICO DA NAÇÃO',
      backgroundColor: '#212E5E',
      mainFontColor: '#E9C800',
      secondaryFontColor: '#E5E5E6',
      lineColor: '#058034',
      font: 'OrbitronBold',
      secondaryFont: 'OrbitronBold',
      image: cbdn2,
      secondLetterSpacing: '3pt'
  },{
      model: 'CONFEDERAÇÃO DOS BANCOS DA NAÇÃO',
      backgroundColor: '#233874',
      mainFontColor: '#EDEEF0',
      secondaryFontColor: '#EDEEF0',
      lineColor: '#EECE00',
      font: 'HelveticaNeue67',
      secondaryFont: 'HelveticaNeue67',
      image: cbdn3,
      secondLetterSpacing: '3pt'
  },{
      model: 'COLETIVO BRASILEIRO DOS DETETIVES NOTURNOS',
      backgroundColor: '#EDE5D4',
      mainFontColor: '#D2161C',
      secondaryFontColor: '#304591',
      lineColor: '#304591',
      font: 'BettyNoir',
      secondaryFont: 'HelveticaNeue',
      image: cbdn4,
  },{
      model: 'COMPANHIA BRASILEIRA DE DIMENSÃO NORTE',
      backgroundColor: '#00612C',
      mainFontColor: '#E9C800',
      secondaryFontColor: 'white',
      lineColor: 'white',
      font: 'HelveticaNeue',
      secondaryFont: 'HelveticaNeue',
      image: cbdn5,
  },{
      model: 'CONFEDERAÇÃO BRASILEIRA DE DADOS NAVAIS',
      backgroundColor: '#5F100E',
      mainFontColor: '#E9C800',
      secondaryFontColor: '#E9C800',
      lineColor: '#E9C800',
      font: 'BlockMarys',
      secondaryFont: 'HelveticaNeue',
      image: cbdn6,
      letterSpacing: '5pt'
  },{
      model: 'CONFEDERAÇÃO DOS BISPOS DA NAÇÃO',
      backgroundColor: '#31448F',
      mainFontColor: '#EBEAEA',
      secondaryFontColor: '#D4D0C5',
      lineColor: '#D4D0C5',
      font: 'BisposBold',
      secondaryFont: 'BisposBold',
      image: cbdn7,
  },{
      model: 'COLETIVO DOS BOTAFOGUENSES DIRETAMENTE DE NAIRÓBI',
      backgroundColor: '#CFCCC1',
      mainFontColor: '#191918',
      secondaryFontColor: '#191918',
      lineColor: '#191918',
      font: 'DharmaGothic',
      secondaryFont: 'DharmaGothic',
      image: cbdn8,
      letterSpacing: '10pt',
      secondLetterSpacing: '3pt'
  }]

  const originalCBDN = {
      model: 'CONFEDERAÇÃO BRASILEIRA DE DESPORTOS NA NEVE',
      backgroundColor: 'var(--midnight-blue)',
      mainFontColor: 'var(--snow-ice)',
      secondaryFontColor: 'var(--middle-yellow)',
      lineColor: 'var(--snow-ice)',
      font: 'KenyanCoffee-Bold',
      secondaryFont: 'PragmaticaLight',
      image: '',
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

  return (
    <>
      <SectionOne fakeModel={fakeModel} originalCBDN={originalCBDN} cbdnOn={cbdnOn} setCbdnOn={setCbdnOn} />
      {/* <SectionTwo fakeModel={fakeModel} originalCBDN={originalCBDN} cbdnOn={cbdnOn} setCbdnOn={setCbdnOn} /> */}
      {/* <Posters fakeCBDNModels={fakeCBDNModels} fakeModel={fakeModel} /> */}
    </>
  )
}

export default App;
