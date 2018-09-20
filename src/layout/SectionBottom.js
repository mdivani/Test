import React from 'react';
import BoxContainer from '../components/BoxContainer';

const SectionBottom = () => (
    <section className='section section--bottom'>
        <div className='section--bottom__left'>
            <BoxContainer type='bottom-left'></BoxContainer>
        </div>
        <div className='section--bottom__right'>
        <BoxContainer type='bottom-right'></BoxContainer>
    </div>
    </section>
);

export default SectionBottom;