import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header.jsx';
import CityListing from './components/city-list.jsx'
import MapComponent from './components/map.jsx'
import FooterComponent from './components/footer.jsx'

const cityList = ['Paris', 'Toronto', 'New York', 'London (UK)', 'LA'];

export default class Main extends React.Component {

  render() {
    return  <div id="root-container">
                <HeaderComponent title='Playing Here' />
                <section>
                  <div className="container">
                    <div className="row">
                      <CityListing cities={cityList} />
                      <MapComponent lat={43.652644} long={-79.381769} zoom={13} mapType={google.maps.MapTypeId.ROADMAP}/>
                    </div>
                  </div>
                  <FooterComponent title='Playing Here' bodyTitle='A concert finding application in collaboration with:'
                  body='Amy Tang, Chanelle Francis, Janelle Hinds and Tiffany Nogueira'
                  MentorName='Abdella Ali' MentorImg='della.jpeg'/>
                </section>

            </div>
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
