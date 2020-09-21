import React from 'react';
import { Button } from '../';

const DemoForm = () => {
    return (
        <form className="demo__form">
            <input 
                aria-label="Open space to enter valid email address"
                placeholder="Enter email address"
                type="email"
            />
            <Button text="Schedule a Demo" color="pink" />
        </form>
    )
}

export default DemoForm;