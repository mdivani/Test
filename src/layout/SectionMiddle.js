import React, {Component} from 'react';
import BoxContainer from '../components/BoxContainer';
import Navigation from '../components/Navigation';

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
                    <BoxContainer 
                      heading='aaaaa aaaaaaa'
                      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non '
                      type='middle-right'>
                        <Navigation elements={[1,2,3]} />
                    </BoxContainer>
                </div>
            </section>
        )
    }
}
