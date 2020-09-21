import React from 'react';
import { AboutCompany } from '../';

const AboutBottom = () => (
    <>
    <ul className="about__metadata__list">
        <li className="about__metadata__list__item">
            <small>Team Members</small>
            <span className="number">300+</span>
        </li>
        <li className="about__metadata__list__item">
            <small>Offices in the US</small>
            <span className="number">3</span>
        </li>
        <li className="about__metadata__list__item">
            <small>Transactions analyzed</small>
            <span className="number">10M+</span>
        </li>
    </ul>
    <div className="about__bottom__card__container">
        <AboutCompany
            heading="The Culture"
            subheading="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
        />
        <AboutCompany
            heading="The People"
            subheading="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
        />
    </div>
    </>
)

export default AboutBottom