import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {

  test = () => console.log('hi');

  constructor(){
    super();
    this.test();
  }

  render(){
    return <h1>Cool Beans!</h1>;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));