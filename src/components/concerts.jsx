import React, {PropTypes, Component} from 'react';

export default class Concerts extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){
     this.props.getConcerts(this.props.selectedCity.location.lat,this.props.selectedCity.location.lng)
  }

  componentWillReceiveProps(nextProps) {
  	debugger;
    this.setState({
     	selectedCity: nextProps.selectedCity.label

    })
    if(nextProps.selectedCity.label != this.props.selectedCity.label) {
    	this.props.getConcerts(nextProps.selectedCity.location.lat,nextProps.selectedCity.location.lng)
	}
  }

  render = () => <div>
                    <h3>Concerts Playing In <span>{this.state.selectedCity}</span></h3>
                    <p>{//this.state.selectedCity.concerts
                    }</p>
                 </div>
}
