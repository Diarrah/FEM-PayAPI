import React from 'react';

const DemoForm = () => {
    const handleClick = (e) => {
        let input = document.querySelector('.demo__form').children[0];

        e.preventDefault()
        input.value = '';
    }

    return (
        <form className="demo__form" onSubmit={handleClick}>
            <input 
                aria-label="Open space to enter valid email address"
                placeholder="Enter email address"
                type="email"
            />
            <button className="btn btn--pink" type="submit">Schedule a Demo</button>
        </form>
    )
}

export default DemoForm;