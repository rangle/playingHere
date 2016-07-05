import React from 'react';

export default class MapComponent extends React.Component {

myStyle = {
  mapSize: {
    width: '100%',
    height: '400px',
    margin:'0 auto'
  }
};

initMap = () =>
{

let mapProp = {
 center:new google.maps.LatLng(this.props.lat, this.props.long),
 zoom: this.props.zoom,
 mapTypeId: this.props.mapType
};
// this.ref is referencing the DOM element(used instead of getElement)
let map = new google.maps.Map(this.refs.myMap, mapProp);

};

// this is basically saying the component is working so render
componentDidMount = () => this.initMap();



  render() {
    return (
    <div className="col-md-8">
      <div id="googleMap" ref="myMap" style={this.myStyle.mapSize}>
      </div>
    </div>
    )
  }
}
