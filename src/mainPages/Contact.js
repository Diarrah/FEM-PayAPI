import React from 'react';
import { Form, PartnersGrid } from '../components';

const Contact = () => (
    <>
    <h1 className="contact__heading">
        Submit a help request and we’ll get in touch shortly.
    </h1>
    <main style={{display:"flex", justifyContent:"space-between"}}>
        <Form />
        <div className="contact__investors__grid">
            <h3 className="contact__investors__grid__heading">Join the thousands of innovators already building with us</h3>
            <PartnersGrid white={false} />
        </div>
    </main>
    </>
)

export default Contact