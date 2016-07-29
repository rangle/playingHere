import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header.jsx';
import ArtistSearch from './components/artist-search.jsx';
import CityListing from './components/city-list.jsx'
import MapComponent from './components/map.jsx'
import FooterComponent from './components/footer.jsx'
import Della from './components/ode-to-della.jsx';
import About from './components/about.jsx';
import Shows from './components/upcoming-shows.jsx';

import { Router, Route, hashHistory } from 'react-router';

//Redux stuffs
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers/index';
import { connect } from 'react-redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import allActions from './actions/index';


//This is where we access all the props from the global state, and specify how we want them to be accessible
//for example, there is a reducer called 'test' which contains some of the information required for the Della component
//on that reducer there is a property called 'reasonsForGreatness' - which is an Immutable.js Set object. We want to, at
//this point and going forward, have it be pure javascript (we don't have to do this, we can keep it immutable all the way down)
//so we specify that on this.props.reasons, we want the pure JS verson of that data.

function mapStateToProps(state) {
  return {
    reasons: state.test.get('reasonsForGreatness').toJS(),
    artistsSearched: state.artistsearch.get('searchList').toJS(),
    concertSearched: state.artistsearch.get('concertSearchList').toJS(),
    cities: state.cities.get('list').toJS(),
    selectedCity: state.cities.get('selected').toJS(),
    contributorList: state.contributors.get('list').toJS(),
    showList: state.shows.get('list').toJS()
  }
}


//In this method, we access the actions from the allActions file, where all actions are then grouped by their categories
//ie, 'reasonActions', and on those categories we have specific actions, ie 'addReason' - once accessed, we decide how they are
//applied to the props of this component, - this.props.addReason(reason) will call dispatch(allActions.reasonActions.addReason(reason))
function mapDispatchToProps(dispatch){
  return {
    addReason: (reason) => dispatch(allActions.reasonActions.addReason(reason)),
    removeReason: (reasonText) => dispatch(allActions.reasonActions.removeReason(reasonText)),
    getReasons: () => dispatch(allActions.reasonActions.asyncSetAllReasons()),
    doASpotifyArtistSearch: (nameToSearch) => dispatch(allActions.artistActions.doASpotifyArtistSearch(nameToSearch)),
    doABITArtistSearch: (nameToSearch) => dispatch(allActions.artistActions.doABITArtistSearch(nameToSearch)),
    setSelectedCity: (cityObj) => dispatch(allActions.cityActions.setSelectedCity(cityObj))
  }
}

export default class Main extends React.Component {

  constructor(){
    super();
    this.state = {
      reasons: []
    }
  }


  componentDidMount(){
    this.props.getReasons();
  }

  render() {

    return  <div id="root-container">
                <HeaderComponent title='Playing Here' logoImage='playing-here-logo.jpg'/>
                <section>
                  {/*  Notice my spread operator on this.state - all properties on that
                  object are now available as props internally, inside my Della Component  */}
                {/* <Della { ...this.props } />*/}
                  <div className="container">
                    <div className="row">
                      <CityListing {...this.props} />
                      <MapComponent lat={this.props.selectedCity.location.lat} long={this.props.selectedCity.location.lng} zoom={13} mapType={google.maps.MapTypeId.ROADMAP}/>
                    </div>
                  </div>
                </section>
                <ArtistSearch  { ...this.props }/>
                <Shows shows={this.props.showList} />
                <About contributors={this.props.contributorList} />
                <FooterComponent title='Playing Here' bodyTitle='A concert finding application in collaboration with:'
                  body='Amy Tang, Chanelle Francis, Janelle Hinds and Tiffany Nogueira'
                  MentorName='Abdella Ali' MentorImg='della.jpeg'/>
            </div>
  }
}

const rootReducer = combineReducers(reducers);
const store = createStore(
  rootReducer, //This is the combination of all your reducers, created above using combineReducers
  {}, //This is the 'initial state', you can specify through this what you might want your initial state to look like
  applyMiddleware(ReduxThunk, createLogger({stateTransformer: (state) => Object.keys(state).map(key => ({val: state[key].toJS(), key})).reduce((p, n) => Object.assign({}, p, {[n.key]: n.val}), {}) })), //This is where you provide all the middleware you want to use, right now just logger
  window.devToolsExtension ? window.devToolsExtension() : f => f //this is what lets redux devtools work
);


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={hashHistory}>
      {/* The solution was using hash history vs browser history - as hashhistory works without a server
      will be a good idea to set up a proper server, as browser history is much nicer to navigate through, but for now, this
      works
      */}
      <Route path="/" component={App} />
      <Route path="/test" component={Della} />
      <Route path="/about" component={About} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
