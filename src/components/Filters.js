import React, { Component } from "react";
import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";

class Filters extends Component {
  constructor(props) {
    super(props);

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(event) {
    let payload = this.props.filters;
    payload[event.target.name] = event.target.value;
    this.props.onFilterChange(payload);
  }

  

  render() {
    const { filters } = this.props;
    const countryOptions = [
      { value: undefined, name: "Todos los países" },
      { value: "Argentina", name: "Argentina" },
      { value: "Brasil", name: "Brasil" },
      { value: "Chile", name: "Chile" },
      { value: "Uruguay", name: "Uruguay" }
    ];
    const priceOptions = [
      { value: undefined, name: "Cualquier precio" },
      { value: 1, name: "$" },
      { value: 2, name: "$$" },
      { value: 3, name: "$$$" },
      { value: 4, name: "$$$$" }
    ];
    const roomOptions = [
      { value: undefined, name: "Cualquier tamaño" },
      { value: 10, name: "Hotel pequeño" },
      { value: 20, name: "Hotel mediano" },
      { value: 30, name: "Hotel grande" }
    ];
    return (
      <>
        <nav className="navbar is-info" style={{ justifyContent: "center" }}>
          <div className="navbar-item">
            <DateFilter
              date={filters.dateFrom}
              name="dateFrom"
              onFilterChange={this.onFilterChange}
              icon="sign-in-alt"
            />
          </div>
          <div className="navbar-item">
            <DateFilter
              date={filters.dateTo}
              name="dateTo"
              onFilterChange={this.onFilterChange}
              icon="sign-out-alt"
            />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              name="country"
              options={countryOptions}
              selected={filters.country}
              onFilterChange={this.onFilterChange}
              icon="globe"
            />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              options={priceOptions}
              name="price"
              selected={filters.price}
              onFilterChange={this.onFilterChange}
              icon="dollar-sign"
            />
          </div>
          <div className="navbar-item">
            <OptionsFilter
              options={roomOptions}
              name="rooms"
              selected={filters.rooms}
              onFilterChange={this.onFilterChange}
              icon="bed"
            />
          </div>
        </nav>
      </>
    );
  }
}

export default Filters;
