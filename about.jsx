import React from 'react';

export default class About extends React.Component {

  //This constructor fires on the instantiation of the component, props is passed in, and we HAVE to super(props) to specify THIS instance (its weird I know), then we can set the state property directly to equal a new object. Equivelant would be getInitialState
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="about">
        <h2>This is all about us!</h2>
      </div>
    )
  }
}
