import React from 'react';
import SectionBottom from './SectionBottom';
import SectionTop from './SectionTop';
import SectionMiddle from './SectionMiddle';
import customData from '../testData.json';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: [],
            middle: [],
            bottom: {}
        }
    }

    componentDidMount() {
        const top = customData.top;
        const middle = customData.middle;
        const bottom = customData.bottom;
        this.setState({top, middle, bottom});
    }

    render() {
        return (
            <main className='page'>
                <SectionTop data={this.state.top} />
                <SectionMiddle data={this.state.middle}/>
                <SectionBottom data={this.state.bottom}/>
            </main>
        )
    }
}
