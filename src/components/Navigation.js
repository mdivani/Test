import React from 'react';

const Navigation = ({elements}) => (
    <nav className='navigation'>
        {
            elements && elements.map((element, index) => {
                return <span 
                        key={index}
                        className={`navigation__nav ${index === 1 ? 'navigation__nav--active': ''}`}>
                       </span>
            })
        }
    </nav>
);

export default Navigation;