import React, { Component } from "react";

class Hotel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { hotel } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={hotel.photo}
              alt={hotel.slug}
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{hotel.name}</p>
          <p>
            {hotel.description}
          </p>
          <div
            className="field is-grouped is-grouped-multiline"
            style={{ marginTop: "1em" }}
          >
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-medium is-info">
                  <i className="fas fa-map-marker"></i>
                </span>
                <span className="tag is-medium">{hotel.city}</span>
              </div>
            </div>
            <div className="control">
              <div className="tags has-addons">
                <span className="tag is-medium is-info">
                  <i className="fas fa-bed"></i>
                </span>
                <span className="tag is-medium">{hotel.rooms} Habitaciones</span>
              </div>
            </div>
            <div className="control">
              <div className="tags">
                <span className="tag is-medium is-info">
                  <i
                    className="fas fa-dollar-sign"
                    style={{ margin: "0 .125em" }}
                  ></i>
                  <i
                    className="fas fa-dollar-sign"
                    style={{ margin: "0 .125em" }}
                  ></i>
                  <i
                    className="fas fa-dollar-sign"
                    style={{ margin: "0 .125em", opacity: ".25" }}
                  ></i>
                  <i
                    className="fas fa-dollar-sign"
                    style={{ margin: "0 .125em", opacity: ".25" }}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <a
            href="#"
            className="card-footer-item has-background-primary has-text-white has-text-weight-bold"
          >
            Reservar
          </a>
        </div>
      </div>
    );
  }
}

export default Hotel;
