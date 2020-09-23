import React from 'react';
import * as logo from '../../images/shared';

const PartnersGrid = ({ white }) => (
    <div className="partners__grid">
        <img 
            className="partners__grid__logo--tesla" 
            src={white ? `${logo.teslaWhite}` : `${logo.tesla}`} 
            alt="Tesla company logo" 
        />
        <img 
            className="partners__grid__logo--microsoft" 
            src={white ? `${logo.microsoftWhite}` : `${logo.microsoft}`} 
            alt="Microsoft company logo" 
        />
        <img 
            className="partners__grid__logo--hp" 
            src={white ? `${logo.hpWhite}` : `${logo.hp}`} 
            alt="Hewlett-Packard company logo" 
        />
        <img 
            className="partners__grid__logo--oracle" 
            src={white ? `${logo.oracleWhite}` : `${logo.oracle}`} 
            alt="Oracle company logo" 
        />
        <img 
            className="partners__grid__logo--google" 
            src={white ? `${logo.googleWhite}` : `${logo.google}`} 
            alt="Google company logo" 
        />
        <img 
            className="partners__grid__logo--nvidia" 
            src={white ? `${logo.nvidiaWhite}` : `${logo.nvidia}`} 
            alt="Nvidia company logo" 
        />
    </div>
)

export default PartnersGrid