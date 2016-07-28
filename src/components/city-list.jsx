import React from 'react';

export default class CityListing extends React.Component {

  myStyle = {
    searchform: {
      padding: '20px',
      width: '100%',
      border: '1px solid #f4f4f4',
      borderLeft: 'none',
      borderRight: 'none'
    },
    rowStyle: {
      cursor: 'pointer'
    }
  };

  static propTypes = {
    cities: React.PropTypes.array
  };

  constructor(props){
    super(props);
    this.state = {
      cities: props.cities
    }
  }

  filterCities = (event) =>
    this.setState({
      cities: this.props.cities
        .filter(cityObj => cityObj.label.toLowerCase()
        .includes(event.target.value.toLowerCase()))
    });



  render = () => <div className="col-md-4">
                  <h3>Top 5 Cities:</h3>
                  <input style={this.myStyle.searchform} type="text" placeholder="Search cities..." onChange={this.filterCities}/>
                    {this.state.cities.map((city, i) =>
                      <h4 key={i}
                          onClick={() => this.props.setSelectedCity(city)}
                          style={this.myStyle.rowStyle}>
                        {city.label}
                      </h4>
                    )}
                 </div>
}
