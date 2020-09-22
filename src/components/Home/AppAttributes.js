import React from 'react';
import { Card } from '../';
import * as image from '../../images/home/desktop';

const AppAttributes = () => {
    let financeText = "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.";
    let bankingText = "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.";
    let consumerText = "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.";

    return (
        <main className="home__main">
            <div className="app__attribute">
                <div className="app__attribute__textbox">
                    <h2 className="app__attribute__textbox__heading">Easy to implement</h2>
                    <p className="app__attribute__textbox__subheading">
                        Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
                    </p>
                </div>
                <div className="app__attribute__image__container">
                    <img src={image.easy} alt="Terminal showing simple lines of code" />
                </div>
            </div>
            <div className="app__attribute">
                <div className="app__attribute__textbox">
                    <h2 className="app__attribute__textbox__heading">Simple UI & UX</h2>
                    <p className="app__attribute__textbox__subheading">
                        Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.
                    </p>
                </div>
                <div className="app__attribute__image__container">
                    <img src={image.simple} alt="iPhones showing simple UI of PayAPI mobile app" />
                </div>
            </div>
            <div className="app__attribute__grid">
                <Card icon={image.finances} heading="Personal Finances" subheading={financeText} />
                <Card icon={image.banking} heading="Banking & Coverage" subheading={bankingText} />
                <Card icon={image.consumer} heading="Consumer Payments" subheading={consumerText} />
            </div>
        </main>
    )
}

export default AppAttributes