import React from 'react';

const Button = ({ text, href, color }) => (
    <a href={href} className={`btn btn--${color}`}>
        {text}
    </a>
)

export default Button