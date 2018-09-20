import React, {Component} from 'react';
import BoxContainer from '../components/BoxContainer';

export default class SectionMiddle extends Component {

    render() {
        return (
            <section className='section section--middle'>
                <div className='section--middle__left'>
                    {
                        this.props.data && this.props.data.map((value, index) => {
                            return (
                                <BoxContainer 
                                  key={index} 
                                  heading={value.heading} 
                                  subHeading={value.subHeading}
                                  text={value.text} 
                                  type='middle'/>
                            )
                        })
                    }
                </div>
                <div className='section--middle__right'>

                </div>
            </section>
        )
    }
}
