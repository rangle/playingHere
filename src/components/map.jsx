import React from 'react';

export default class MapComponent extends React.Component {

myStyle = {
  mapSize: {
    width: '100%',
    height: '400px',
    margin:'0 auto 30px auto'
  },
  inputSize: {
    width: '50%',
    marginBottom:'10px'
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

const submit = document.getElementById('submit');
const geolocation = document.getElementById('geolocation');
let city = document.getElementById('cityInput');
this.geocoder = new google.maps.Geocoder();
const autocomplete = new google.maps.places.Autocomplete(city);
        autocomplete.bindTo('bounds', this.mapObj);


geolocation.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.mapObj.setCenter(new google.maps.LatLng(pos.lat, pos.lng), this.props.zoom);
});


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
    <div class="input-group">
      <input type="text" class="form-control"id="cityInput"  placeholder="City Name" style={this.myStyle.inputSize} />
      <span class="input-group-btn">
        <button class="btn btn-secondary" id="submit" onClick= {() => this.geocodeAddress(this.geocoder, this.mapObj)} type="button">Submit</button>
        <button class="btn btn-secondary" id="geolocation" type="button">Current Location</button>
      </span>
    </div>
      <div id="googleMap" ref="myMap" style={this.myStyle.mapSize}>
      </div>
    </div>

    )
  }
}
