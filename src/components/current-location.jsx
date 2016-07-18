import React from 'react';

export default class CurrentLocation extends React.Component {

  toggleFavorite(){
    this.props.onFavoriteToggle(this.props.address);
  },

  render = () => <div className="col-xs-12 col-md-6 current-location">
                  <h4 id="save-location" className="">{this.props.address}</h4>
                </div>

}

module.exports = CurrentLocation;
