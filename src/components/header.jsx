import React from 'react';

const propTypes = {
  title: React.PropTypes.string
};

export default class HeaderComponent extends React.Component {

  //This constructor fires on the instantiation of the component, props is passed in, and we HAVE to super(props) to specify THIS instance (its weird I know), then we can set the state property directly to equal a new object. Equivelant would be getInitialState
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.title
    }
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>{ this.props.title }</h1>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </header>
    )
  }
}

HeaderComponent.propTypes = propTypes;
