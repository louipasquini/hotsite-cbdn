import React from "react";
import { useState } from "react";
import CBDNLogo from "../../assets/CBDN-Blue-Vertical.svg";
import Button from "../Button/Button";
import './LogoGenerator.css';

const LogoGenerator = () => {
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    let c = ['CONFEDERAÇÃO', 'CANAL', 'CASA', 'COMPANHIA', 'CERTIFICADO', 'CENTRO']
    let b = ['BRASILEIRA', 'DE BOTAFONGUENSES', 'DE BISPOS', 'BALISTA']
    let d = ['DE DESPORTOS', 'DIRETAMENTE', 'DE DADOS', 'DE DESENVOLVIMENTO']
    let n = ['NA NEVE', 'NA NUVEM', 'DE NAIROBI', 'DE NATAÇÃO', 'NACIONAL']

    let cEmbaralhado = shuffleArray(c)
    let bEmbaralhado = shuffleArray(b)
    let dEmbaralhado = shuffleArray(d)
    let nEmbaralhado = shuffleArray(n)

    const [name,setName] = useState(`${cEmbaralhado.pop()} ${bEmbaralhado.pop()} ${dEmbaralhado.pop()} ${nEmbaralhado.pop()}`)

    const clickGenerate = () => {
        cEmbaralhado = shuffleArray(c)
        bEmbaralhado = shuffleArray(b)
        dEmbaralhado = shuffleArray(d)
        nEmbaralhado = shuffleArray(n)

        console.log('rolou')

        setName(`${cEmbaralhado.pop()} ${bEmbaralhado.pop()} ${dEmbaralhado.pop()} ${nEmbaralhado.pop()}`)
    }

    return (
        <div className="logo-generator">
            <img src={CBDNLogo} alt="logo" className="logo" />
            <p>{name}</p>
            <Button btnFunction={clickGenerate}>GERAR CBDN</Button>
        </div>
    )
}

export default LogoGenerator;