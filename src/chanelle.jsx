import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {

  test = () => console.log('hello world');

  render(){
    return <h1>Hey There!</h1>;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
