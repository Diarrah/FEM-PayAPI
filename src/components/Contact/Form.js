import React, { useState, useRef } from 'react';

const Form = () => {
    const [emailList, setEmailList] = useState(false);   
    const [validForm, setValidForm] = useState(false); 
    const formElement = useRef();

    function isEmpty() {
        let inputElements = [...formElement.current.children].slice(0, -2);

        inputElements.forEach(input => {
            if (input.children[0].value.trim() === '') {
                input.classList.add('invalid')
                input.children[1].innerText = `This field can't be empty`

                const timeoutID = setTimeout(() => {
                    input.classList.remove('invalid')
                    return () => clearTimeout(timeoutID)
                }, 10000)
                
            } else {
                input.classList.remove('invalid')
            }
        })
    }

    function validateEmail(email) {
        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmail.test(String(email).toLowerCase());
    }

    function isValid() {
        let email = formElement.current.children[1];

        if (!validateEmail(email.children[0].value.trim()) && email.children[0].value !== '') {
            email.classList.add('invalid')
            email.children[1].innerText = `Email address entered invalid`

            const timeoutID = setTimeout(() => {
                email.children[0].value === '' && email.classList.remove('invalid')
                return () => clearTimeout(timeoutID)
            }, 10000)
            
        } else {
            isEmpty(email.children[0].value.trim())
        }
    }

    const handleFormSubmit = e => {
        let inputElements = [...formElement.current.children].slice(0, -2);

        e.preventDefault()
        isEmpty()
        isValid()

        inputElements.forEach(input => input.addEventListener('focusin', () => {
            if (input.children[0].type !== 'email') {
                input.classList.remove('invalid') 
            } else if (input.children[0].type === 'email' && !validateEmail(input.children[0].value) && input.children[0].value !== '') {
                inputElements[1].classList.add('invalid')
            } else {
                input.classList.remove('invalid')
            }   
        }))

        if (!inputElements.some(input => input.classList.contains('invalid'))) {
            setValidForm(true)
            setTimeout(() => {
                formElement.current.reset()
                setValidForm(false)
            }, 1000)
        }        
    }
    
    return (
        <form className="contact__form" ref={formElement} onSubmit={handleFormSubmit}>
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
            <button className={`btn btn--transparent-blue ${validForm ? 'valid' : ''}`} type="submit">Submit</button>
        </form>
    )
}

export default Form