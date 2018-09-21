import React from 'react';

const Button = (props) => (
    <button className={`btn ${props.className}`}>
        <span className='btn__main'>{props.value}</span>
        <span className='btn__hover'>{props.hover}</span>
    </button>
);

export default Button;