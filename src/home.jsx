import React from 'react';
import ReactDOM from 'react-dom';
require('style!css!./style.css');

export default class Main extends React.Component {

  render() {
    return <h1>Testing</h1>
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
