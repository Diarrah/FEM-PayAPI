import React from 'react';
import { AboutHeader, AboutBottom } from '../components';
import imageDesktop from '../images/about/desktop/image-team-members.jpg';
import imageMobile from '../images/about/mobile/image-team-members.jpg';

const About = () => (
    <div className="page page--about">
        <AboutHeader />
        <div className="about__middle__image__container">
            <img className="image image__desktop" src={imageDesktop} alt="Team members working together" />
            <img className="image image__mobile" src={imageMobile} alt="Team members working together" />
        </div>
        <AboutBottom />
    </div>
)

export default About