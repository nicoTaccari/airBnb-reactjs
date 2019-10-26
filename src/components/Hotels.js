import React, { Component } from "react";
import Hotel from './Hotel'

class Hotels extends Component {
  constructor(props) {
    super(props);

    this.displayFilteredHotels = this.displayFilteredHotels.bind(this);
  }

  displayFilteredHotels(hotels) {
    if(hotels.length > 0){
      return (hotels.map((hotel, index) => (
                <div className="column is-one-third" key={index}>
                <Hotel hotel={hotel}/>
              </div>
            )
     ));
    } else {
      return (
        <article className="message is-warning">
          <div className="message-body">
            No se han encontrado hoteles con los criterios definidos
          </div>
        </article>
      );
    }
  }

  render() {
    const { hotels } = this.props;
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.displayFilteredHotels(hotels)}
          </div>
        </div>
      </section>
    );
  }
}

export default Hotels;
