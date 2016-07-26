import React from 'react';

export default class MapComponent extends React.Component {

  myStyle = {
    mapSize: {
      width: '100%',
      height: '400px',
      margin:'0 auto'
    }
  };

  // Let's create this map object so it's available throughout this code and this way we can change let map = new google.maps.. to this.mapObj...
  mapObj;

  initMap = () => {

    let mapProp = {
     center:new google.maps.LatLng(this.props.lat, this.props.long),
     zoom: this.props.zoom,
     mapTypeId: this.props.mapType
    };

    // this.ref is referencing the DOM element(used instead of getElement)
    this.mapObj = new google.maps.Map(this.refs.myMap, mapProp);

  };

  // this is basically saying the component is working so render
  componentDidMount = () => this.initMap();

  componentWillReceiveProps(nextProps) {
    this.mapObj.setCenter(new google.maps.LatLng(nextProps.lat, nextProps.long), this.props.zoom);
  }

  render() {
    return (
      <div className="col-md-8">
        <div id="googleMap" ref="myMap" style={this.myStyle.mapSize}>
        </div>
      </div>
    )
  }
}
