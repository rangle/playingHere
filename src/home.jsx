import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header';

// Styles
import 'style!css!./style.css';

export default class Main extends React.Component {

  render() {
    return  <HeaderComponent title='Playing here' />
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


