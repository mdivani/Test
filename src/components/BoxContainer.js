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
            <Box className='box--middle'>
                <h1 className='heading-primary'>{props.heading}</h1>
                {props.subHeading && <h3 className='heading-tertiary'>{props.subHeading}</h3>}
                <p className='text-primary'>{props.text}</p>
            </Box>
        )
    }
    else if(props.type === 'bottom') {
        return (
            <Box className='box--bottom'>
                
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