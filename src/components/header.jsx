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
      <div className="header">
        <div className="container">
          <h1>{ this.props.title }</h1>
        </div>
      </div>
    )
  }
}

HeaderComponent.propTypes = propTypes;
