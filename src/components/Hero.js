import React, { Component } from "react";
import Moment from "moment";
import 'moment/locale/es';

class Hero extends Component {
  constructor(props) {
    super(props);
    Moment.locale("es");
    this.state = props.filters;
  }

  render() {
    const { dateFrom, dateTo, country, price, rooms} = this.state;
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{Moment(dateFrom).format('dddd, D MMMM [de] Y')} </strong> 
              hasta el{" "} <strong>{Moment(dateTo).format('dddd, D MMMM [de] Y')}</strong>
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero
