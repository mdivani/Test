import React from 'react';
import BoxContainer from '../components/BoxContainer';
import customData from '../testData.json';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const data = customData;
        this.setState({data});
    }

    render() {
        return (
            <main className='page'>
                <section className='section section--top'>
                    {
                        this.state.data && this.state.data.dataItems.map((value, index) => {
                            return <BoxContainer 
                                      key={index} //ideally I should have an ID
                                      type='top'
                                      heading={value.heading}
                                      text={value.text}
                                    />
                        })  
                    }
                </section>
            </main>
        )
    }
}
