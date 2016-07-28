import React from 'react';

const propTypes = {
  title: React.PropTypes.string
};

export default class HeaderComponent extends React.Component {

  //This constructor fires on the instantiation of the component, props is passed in, and we HAVE to super(props) to specify THIS instance (its weird I know), then we can set the state property directly to equal a new object. Equivelant would be getInitialState
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.title,
      logoImage: this.props.logoImage
    }
  }

  myStyle = {
    containerStyles: {
      padding: '20px'
    },
    logoImgSize: {
      width: '80px',
      height: '100px'
    }
  };

  render() {
    return (
      <header className="header">
        <div className="container" style={this.myStyle.containerStyles}>
          <div className="row">
            <div className="col-md-10">
              <h1>{this.props.title}</h1>
            </div>
            <div className="col-md-2">
              <a href="https://www.google.ca"><img src={"../src/images/" + this.props.logoImage} style={this.myStyle.logoImgSize}/></a>

            </div>
          </div>
        </div>
      </header>
    )
  }
}

HeaderComponent.propTypes = propTypes;
