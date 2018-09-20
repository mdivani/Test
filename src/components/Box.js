import React from 'react';

const Box = (props) => (
    <div className={`box ${props.className}`}>
        {props.children}
    </div>
);

export default Box;