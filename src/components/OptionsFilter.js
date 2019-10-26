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

//   selectItems(options) {
//     const listItems = options.map((item, index) => (
//         <option key={index} name={item.name}>
//         {item.name}
//         </option>
//       ));
//       return listItems
//   }

  render() {
      const { options, icon, selected, name } = this.props
    return (
      <>
        <div className="field">
          <div className="control has-icons-left">
            <div className="select" style={{ width: "100%" }}>
            <select defaultValue={selected} name={name} onChange={this.handleOptionChange}>
              {options.map((opcion)=> <option value={opcion.value}>{opcion.name}</option>)}  
            </select>
            </div>
            <div className="icon is-small is-left">
              <i className={"fa fa-" + icon}></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OptionsFilter;
