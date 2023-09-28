import React from "react";
import './Posters.css';

const Posters = ({ fakeCBDNModels , fakeModel }) => {
    return (
        <div className="posters">
            <img src={fakeCBDNModels[0].image} alt="poster-1" />
            <img src={fakeCBDNModels[1].image} alt="poster-2" />
            <img src={fakeCBDNModels[2].image} alt="poster-3" />
            <img src={fakeCBDNModels[3].image} alt="poster-4" />
            <img src={fakeCBDNModels[4].image} alt="poster-5" />
            <img src={fakeCBDNModels[5].image} alt="poster-6" />
            <img src={fakeCBDNModels[6].image} alt="poster-7" />
            <img src={fakeModel.image} alt="poster-8" />
        </div>
    )
};

export default Posters;