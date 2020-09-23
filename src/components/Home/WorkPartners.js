import React from 'react';
import { PartnersGrid, Button } from '../';

const WorkPartners = () => (
    <div className="partners">
        <div className="partners__textbox">
            <h2 className="partners__textbox__heading">Who we work with</h2>
            <p className="partners__textbox__subheading">
                Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
            </p>
            <Button text="About Us" href="/about" color="transparent-white" />
        </div>
        <PartnersGrid white={true} />
    </div>
)

export default WorkPartners;