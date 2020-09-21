import React from 'react';

const AboutCompanyCard = ({ heading, subheading }) => (
    <div className="about__company__card">
        <h3 className="about__company__card__heading">{heading}</h3>
        <p className="about__company__card__subheading">{subheading}</p>
    </div>
)

export default AboutCompanyCard