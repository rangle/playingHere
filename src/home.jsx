import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header.jsx';
import ArtistList from './components/artist-list.jsx';
import CityListing from './components/city-list.jsx'
import MapComponent from './components/map.jsx'
import FooterComponent from './components/footer.jsx'
import Della from './components/ode-to-della.jsx';

//Redux stuffs
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers/index';
import { connect } from 'react-redux';

import * as allActions from './actions/index';

const cityList = ['Paris', 'Toronto', 'New York', 'London (UK)', 'LA'];



function mapStateToProps({test, artist}) {
  return {
    dellaReasons: test.get('reasonsForGreatness').toJS(),
    artistList: artist.get('list').toJS()
  }
}

function mapDispatchToProps(dispatch){
  return {
    addReason: (reason) => dispatch(allActions.addReason(reason)),
    removeReason: (reasonText) => dispatch(allActions.removeReason(reasonText))

  }
}

export default class Main extends React.Component {


  constructor(){
    super();
    this.state = {
      reasons: []
    }
  }

  getData = () => $.get('http://pokeapi.co/api/v2/pokemon?limit=20');

  componentDidMount(){
    this.getData().then(res => {
      this.setState({reasons: res.results.map(pokemon => pokemon.name)})
    });
  }

  render() {

    return  <div id="root-container">
                <HeaderComponent title='Playing Here' />
                <section>
                  <Della {...this.state} />
                  <div className="container">
                    <div className="row">
                      <CityListing cities={cityList} />
                      <MapComponent lat={43.652644} long={-79.381769} zoom={13} mapType={google.maps.MapTypeId.ROADMAP}/>
                    </div>
                  </div>
                </section>
                <ArtistList listIn={this.props.artistList}/>
                <FooterComponent title='Playing Here' bodyTitle='A concert finding application in collaboration with:'
                  body='Amy Tang, Chanelle Francis, Janelle Hinds and Tiffany Nogueira'
                  MentorName='Abdella Ali' MentorImg='della.jpeg'/>
            </div>
  }
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
