import React, { Component } from "react";

class DateFilter extends Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);

  }

  handleDateChange(event) {
      this.props.onFilterChange(event);
  }

  render() {
      const { name, date } = this.props;
    return (
      <>
        <nav className="level">
          <div className="level-item has-text-centered">
            <div className="field">
              <div className="control has-icons-left">
                <input className="input" name={ name } value= { date } onChange={ this.handleDateChange } type="date" />
                <span className="icon is-small is-left">
                  <i className="fas fa-sign-in-alt"></i>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default DateFilter;
