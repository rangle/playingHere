import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header.jsx';
import ClassyDella from './components/ode-to-della.jsx';

const reasonsDellaIsGreat = ['Handsomeness', 'Intelligence', 'Wit', 'Humility', 'Charisma', 'Humour'];

// Styles
import 'style!css!./styles/style.css';

export default class Main extends React.Component {

  render() {
    return <section id="root-container">
              <HeaderComponent title='Playing Heres' />
              <ClassyDella reasons={reasonsDellaIsGreat} />
            </section>
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


