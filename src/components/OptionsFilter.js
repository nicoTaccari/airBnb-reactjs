import React, { Component } from "react";

class OptionsFilter extends Component {
  constructor(props) {
    super(props);
    
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
      console.log(event.target.name)
      this.props.onFilterChange(event);
  }

  selectItems(options) {
    const listItems = options.map((item, index) => (
        <option key={index} name={item.name}>
        {item.name}
        </option>
      ));
      return listItems
  }

  render() {
      let options = this.props.options;
    return (
      <>
        <div className="field">
          <div className="control has-icons-left">
            <div className="select" style={{ width: "100%" }}>
              <select style={{ width: "100%" }} onChange={this.handleOptionChange}>
                {this.selectItems(options)}
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className="fas"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OptionsFilter;
