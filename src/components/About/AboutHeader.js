import React from 'react';
import { AboutCompany } from '../';

const AboutHeader = () => (
    <div className="about__header">
        <h1 className="about__header__heading">
            We empower innovators by delivering access to the financial system
        </h1>
        <div className="about__header__card__container">
            <AboutCompany
                heading="Our Vision"
                subheading="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology."
            />
            <AboutCompany
                heading="Our Business"
                subheading="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers."
            />
        </div>
    </div>
)

export default AboutHeader