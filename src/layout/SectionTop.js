import React from 'react';
import BoxContainer from '../components/BoxContainer';

const SectionTop = (props) => (
    <section className='section section--top'>
    {
        props.data && props.data.map((value, index) => {
            return <BoxContainer 
                      key={index} //ideally I should have an ID
                      type='top'
                      heading={value.heading}
                      text={value.text}
                    />
        })  
    }
</section>
);

export default SectionTop;