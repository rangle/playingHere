import React from 'react';

export default class FooterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      footerTitle: this.props.title,
      footerBodyTitle: this.props.bodyTitle,
      footerBody: this.props.body,
      MentorName: this.props.MentorName,
      MentorImage: this.props.MentorImg
    }
  }

  myStyle = {
    imgSize: {
      width: '80',
      height: '80'
    },
    centerText: {
      textAlign: 'center'
    },
    containerStyles: {
      backgroundColor: 'black',
      color: 'white',
      margin: '40px auto 0 auto',
      width: '100%',
      padding: '30'
    },
    hrWidth:{
      width:'40%'
    },
    bodyStyles:{
      marginTop:'35',
      margin:'0 auto'
    },
    paragraph:{
      padding: '0 60px'
    },
    header:{
      padding: '0 60px',
      lineHeight: '1.4'
    }
  };

  render() {
    return (
      <footer className="footer">
        <div className="container" style={this.myStyle.containerStyles}>
          <div className="row" style={this.myStyle.centerText}>
            <div className="col-md-4">
              <h3>{this.props.title}</h3>
              <hr style={this.myStyle.hrWidth}/>
            </div>
            <div className="col-md-4" style={this.myStyle.bodyStyles}>
              <h4 style={this.myStyle.header}>{this.props.bodyTitle}</h4>
              <p style={this.myStyle.paragraph}>{this.props.body}</p>
            </div>
            <div className="col-md-4" style={this.myStyle.bodyStyles}>
              <h4>Mentor</h4>
              <div className="row">
                <div className="col-md-12">
                  <p>{this.props.MentorName}</p>
                </div>
                <div className="col-md-12">
                  <img src={"../src/images/" + this.props.MentorImg} style={this.myStyle.imgSize}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
