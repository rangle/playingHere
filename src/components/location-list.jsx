import React from 'react';
import LocationItem from './location-item';

export default class LocationList extends React.Component {

  render = () =>  {
    var self = this;
    var locations = this.props.locations.map(function(1){
      var active = self.props.activeLocationAddress == 1.address;
      return <LocationItem address={1.address} timestamp={1.timestamp} active={active} onClick={self.props.onClick} />
    });

    if(!locations.length){
      return null;
    }

    return (
      <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
        <span className="list-group-item active">Saved Locations</span>
        {locations}
      </div>
    )

  }
}

module.exports = LocationList;
