import React from 'react';
import Box from './Box';
import Button from './Button';

const BoxContainer = (props) => {

    if(props.type === 'top') {
        return (
            <Box className='box--top'>
                <h1 className='heading-primary'>{props.heading}</h1>
                <p className='text-primary'>{props.text}</p>
                <Button />
            </Box>
        )
    }
    else if(props.type === 'middle') {
        return (
            <Box className='box--middle-left'>
                <h1 className='heading-primary'>{props.heading}</h1>
                {props.subHeading && <h3 className='heading-tertiary'>{props.subHeading}</h3>}
                <p className='text-primary'>{props.text}</p>
            </Box>
        )
    }
    else if(props.type === 'middle-right') {
        return (
            <Box>
                <h1 className='heading-sidebar'>{props.heading}</h1>
                {props.children}
                <p className='text-secondary'>{props.text}</p>
                <button className='btn btn--primary'> button 1 </button>
            </Box>
        )
    }
    else if(props.type === 'bottom-right') {
        return (
            <Box className='box--bottom box--bottom--right'>
                <h1 className='heading-secondary'>lorom ipsum dolor</h1>
                <p className='text-tertiary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                </p>
            </Box>
        )
    }
    else if(props.type === 'bottom-left') {
        return (
            <Box className='box--bottom box--bottom--left'>
                <h1 className='heading-secondary'>lorom ipsum dolor</h1>
                <p className='text-tertiary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                </p>
            </Box>
        )
    }

    return (
        <Box>
            <h1>No text!</h1>
        </Box>
    )
};

export default BoxContainer;