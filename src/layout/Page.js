import React from 'react';
import BoxContainer from '../components/BoxContainer';
import SectionMiddle from './SectionMiddle';
import customData from '../testData.json';
import SectionBottom from './SectionBottom';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: null,
            middle: null
        }
    }

    componentDidMount() {
        const top = customData.top;
        const middle = customData.middle;
        this.setState({top, middle});
    }

    render() {
        return (
            <main className='page'>
                <section className='section section--top'>
                    {
                        this.state.top && this.state.top.map((value, index) => {
                            return <BoxContainer 
                                      key={index} //ideally I should have an ID
                                      type='top'
                                      heading={value.heading}
                                      text={value.text}
                                    />
                        })  
                    }
                </section>
                <SectionMiddle data={this.state.middle}/>
                <SectionBottom />
            </main>
        )
    }
}
