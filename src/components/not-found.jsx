import React from 'react';

export default class NotFound extends React.Component {

  //This constructor fires on the instantiation of the component, props is passed in, and we HAVE to super(props) to specify THIS instance (its weird I know), then we can set the state property directly to equal a new object. Equivelant would be getInitialState
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="main">
        <button >Oops Try again!</button>
      </div>
    )
  }
}
