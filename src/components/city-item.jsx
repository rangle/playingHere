import React from 'react';
import CityItem from './city-item';

export default class CityItem extends React.Component {

  handleClick(){
    this.props.onClick(this.props.address);
  }

  render = () =>  {

    var cn = "list-group-item";

    if(this.props.active) {
      cn += " active-locations";
    }

    return (
      <a href="" className={cn} onClick={this.handleClick}>
        {this.props.address}
      </a>
    )

  }
}

module.exports = CityItem;
