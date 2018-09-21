import React from 'react';
import BoxContainer from '../components/BoxContainer';

const SectionBottom = ({data = {}}) => (
    <section className='section section--bottom'>
        <div className='section--bottom__left'>
            <BoxContainer 
                type='bottom-left'
                heading={data.heading}
                text={data.text}
            />
        </div>
        <div className='section--bottom__right'>
            <BoxContainer 
                type='bottom-right'
                heading={data.heading}
                text={data.text}
            />
    </div>
    </section>
);

export default SectionBottom;