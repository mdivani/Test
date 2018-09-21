import React from 'react';
import Box from './Box';
import Button from './Button';

const BoxContainer = (props) => {

    if(props.type === 'top') {
        return (
            <Box className='box--top'>
                <h1 className='heading-primary'>{props.heading}</h1>
                <p className='text-primary'>{props.text}</p>
                <Button className='btn--secondary' value='button 2' hover='button 2 hover' />
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
            <Box className='box--middle-right'>
                <h1 className='heading-sidebar'>{props.heading}</h1>
                {props.children}
                <p className='text-secondary'>{props.text}</p>
                <Button className='btn--primary' value='button 1' hover='meet our works' />
            </Box>
        )
    }
    else if(props.type === 'bottom-right') {
        return (
            <Box className='box--bottom box--bottom--right'>
                <h1 className='heading-secondary'>{props.heading}</h1>
                <p className='text-tertiary'>
                {props.text}
                </p>
            </Box>
        )
    }
    else if(props.type === 'bottom-left') {
        return (
            <Box className='box--bottom box--bottom--left'>
                <h1 className='heading-secondary'>{props.heading}</h1>
                <p className='text-tertiary'>
                 {props.text}
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