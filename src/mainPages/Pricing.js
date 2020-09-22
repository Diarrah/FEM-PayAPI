import React, { useState } from 'react';
import { Button } from '../components'; 
import data from '../pricingData.json';

const Pricing = () => {
    let [plans] = useState(data);

    return (
        <div className="page page--pricing">
            <h1 className="price__page__heading">Pricing</h1>
            <div className="price__card__container">
                { plans.map(({ plan, description, price, features }) => (
                    <div className="price__card" key={plan}>
                        <h2 className="price__card__heading">{plan} Plan</h2>
                        <p className="price__card__description">{description}</p>
                        <p className="price__card__price"><span>$</span>{price.toFixed(2)}</p>
                        <ul className="price__card__feature__list">
                            { Object.entries(features).map(feature => {
                                const [key, value] = feature;
                                    return (
                                        <li className={`price__card__feature${value ? ' price__card__feature--available' : ''}`} key={key}>
                                            {value && <i className="fas fa-check" aria-label="checkmark" />}
                                            {key}
                                        </li> 
                                    )   
                                })
                            }                
                        </ul>  
                        <Button text="Request Access" color="transparent-blue" />
                    </div>
                ))}  
            </div>
        </div>
    )
}

export default Pricing