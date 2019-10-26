import React, { Component, Fragment } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Hotels from "./components/Hotels";
import Moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        dateFrom: Moment(new Date()).format("YYYY-MM-DD"),
        dateTo: Moment()
          .add(1, "month")
          .format("YYYY-MM-DD"),
        country: "",
        price: 0,
        rooms: 0
      },
      hotels: [],
      filteredHotels: [],
      isAllLoaded: false
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload
    });
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({
        hotels: json,
        filteredHotels: json,
        isAllLoaded: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  warning() {
    return (
      <article className="message is-warning">
        <div className="message-body">
          No se han encontrado hoteles con los criterios definidos
        </div>
      </article>
    );
  }

  render() {
    const { filters, filteredHotels } = this.state;
    
    return (
      <Fragment>
        <Hero filters={filters} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
        {this.state.isAllLoaded ? (
          <Hotels hotels={filteredHotels} />
        ) : (
          this.warning()
        )}
      </Fragment>
    );
  }
}

export default App;
