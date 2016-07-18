import React from 'react';
import LocationItem from './location-item';
import moment = require('moment');

export default class LocationItem extends React.Component {

  handleClick(){
    this.props.onClick(this.props.address);
  }

  render = () =>  {

    var cn = "list-group-item";

    return (
      <a href="" className={cn} onClick={this.handleClick}>
        {this.props.address}
        <span className="created-at">{ moment(this.props.timestamp).fromNow() }</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </a>
    )

  }
}

module.exports = LocationItem;
