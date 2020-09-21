import React from 'react'

const AppAttributeCard = ({ icon, heading, subheading }) => (
    <div className="grid__card">
        <div className="grid__card__icon__container">
            <img className="grid__card__icon" src={icon} alt={`${heading} icon`} />
        </div>
        <h4 className="grid__card__heading">{heading}</h4>
        <p className="grid__card__subheading">{subheading}</p>
    </div>
)

export default AppAttributeCard