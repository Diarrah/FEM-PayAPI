import React, { useState } from 'react';
import { Button } from '../';

const Form = () => {
    const [emailList, setEmailList] = useState(false);    
    
    return (
        <div className="contact__form">
            <div className="contact__form__control">
                <input
                    aria-label="Enter first and last name here"
                    placeholder="Name"
                    type="text"
                />
                <small className="error__msg" />
            </div>
            <div className="contact__form__control">
                <input
                    aria-label="Enter valid email address here"
                    placeholder="Email Address"
                    type="email"
                />
                <small className="error__msg" />
            </div>
            <div className="contact__form__control">
                <input
                    aria-label="Enter name of your company here"
                    placeholder="Company Name"
                    type="text"
                />
                <small className="error__msg" />
            </div>
            <div className="contact__form__control">
                <input
                    aria-label="Enter your job title here"
                    placeholder="Title"
                    type="text"
                />
                <small className="error__msg" />
            </div>
            <div className="contact__form__control">
                <textarea
                    aria-label="Enter message here"
                    placeholder="Message"
                />
                <small className="error__msg" />
            </div>
            <div className="contact__form__control">
                <span className={`checkbox ${emailList ? 'checked' : ''}`} onClick={() => {setEmailList(!emailList)}}>
                    <i className="fas fa-check" aria-label="checkmark" />
                </span>
                <small className={`email__list ${emailList ? 'checked' : ''}`} onClick={() => {setEmailList(!emailList)}}>
                    Stay up-to-date with company announcements and updates to our API
                </small>
            </div>
            <Button text="Submit" color="transparent-blue" />
        </div>
    )
}

export default Form