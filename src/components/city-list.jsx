import React from 'react';

export default class CityListing extends React.Component {

  myStyle = {
    searchform: {
      padding: '20px',
      width: '100%',
      border: '1px solid #f4f4f4',
      borderLeft: 'none',
      borderRight: 'none'
    }

  };

  constructor(props){
    super(props);
    this.state = {
      cityNames: props.cities
    }
  }

  filterCities = (event) =>
    this.setState({
      cityNames: this.props.cities
        .filter(city => city.toLowerCase()
        .includes(event.target.value.toLowerCase()))
    });

  render = () => <div className="col-md-4">
                  <h3>Top 5 Cities:</h3>
                  <input style={this.myStyle.searchform} type="text" placeholder="Search cities..." onChange={this.filterCities}/>
                    {this.state.cityNames.map(city => <h4 style={this.myStyle.rowStyle}>{city}</h4>)}
                 </div>
}
