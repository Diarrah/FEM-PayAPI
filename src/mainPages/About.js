import React from 'react';
import { AboutHeader, AboutBottom } from '../components';
import image from '../images/about/desktop/image-team-members.jpg';

const About = () => (
    <>
    <AboutHeader />
    <div className="about__middle__image__container">
        <img src={image} alt="Team members working together" />
    </div>
    <AboutBottom />
    </>
)

export default About