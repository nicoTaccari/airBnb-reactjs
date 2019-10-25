import React, { Component, Fragment } from 'react';
import './App.css';
import Hero from './components/Hero';
import Filters from './components/Filters';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters : {
        dateFrom: new Date(), // Proviene del archivo data.js
        dateTo: new Date(Date.now() + 86400000),
        country: '',
        price: 0,
        rooms: 0
      },
      hotels: [],
      filteredHotels: [],
      isAllLoaded: false
      
    }
    console.log(this.state.filters);
  }

  async componentDidMount() {
    try {
        const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json);
        this.setState({
            hotels: json,
            isAllLoaded: true
        });
    } catch (error) {
        console.log(error);
    }
}
  
  render() {
    const { filters } = this.state;
    return (
    <Fragment>
      <Hero filters={filters}/>
      <Filters filters={ filters }/>
    </Fragment>
    )
  }   
}

export default App;
