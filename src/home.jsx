import React from 'react';
import ReactDOM from 'react-dom';
import 'style!css!./style.css';

export default class Main extends React.Component {

  render() {
    return  <header className="page-header">
        <div className="container">
          <div class="row">
            <div class="col-md-7">
              <h1>Playing Here</h1>
            </div>
            <div class="col-md-5">

            </div>
          </div>
        </div>
      </header>
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
