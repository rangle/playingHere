import React from 'react';

export default class MapComponent extends React.Component {

myStyle = {
  mapSize: {
    width: '100%',
    height: '400px',
    margin:'0 auto 30px auto'
  }
};

  mapObj;

initMap = () =>
{

let mapProp = {
 center:new google.maps.LatLng(this.props.lat, this.props.long),
 zoom: this.props.zoom,
 mapTypeId: this.props.mapType
};
// this.ref is referencing the DOM element(used instead of getElement)
this.mapObj = new google.maps.Map(this.refs.myMap, mapProp);

let submit = document.getElementById('submit');
let geocoder = new google.maps.Geocoder();

submit.addEventListener('click', ()=>{
this.geocodeAddress(geocoder, this.mapObj);
});


};


geocodeAddress = (geocoder, resultsMap) =>
{
let address = document.getElementById('cityInput').value;
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          resultsMap.setCenter(results[0].geometry.location);
          let marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
};

// this is basically saying the component is working so render
  componentDidMount = () => this.initMap();




  componentWillReceiveProps(nextProps) {
    this.mapObj.setCenter(new google.maps.LatLng(nextProps.lat, nextProps.long), this.props.zoom);
  }





  render() {
    return (
    <div className="col-md-8">
      <input id="cityInput" type="text" className="form-control input-lg" />
      <input id="submit" type="submit" className="btn btn-default btn-lg"/>
      <div id="googleMap" ref="myMap" style={this.myStyle.mapSize}>
      </div>
    </div>
    )
  }
}
