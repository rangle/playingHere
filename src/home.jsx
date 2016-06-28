import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header.jsx';

// Styles
import 'style!css!./styles/style.css'

export default class Main extends React.Component {

  render() {
    return  <HeaderComponent title='Playing Here' />
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


