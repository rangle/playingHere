import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header.jsx';
import CityListing from './components/city-list.jsx'

const cityList = ['Paris', 'Toronto', 'New York', 'London (UK)', 'LA'];

export default class Main extends React.Component {

  render() {
    return  <section id="root-container">
                <HeaderComponent title='Playing Here' />
                <CityListing cities={cityList} />
            </section>
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


