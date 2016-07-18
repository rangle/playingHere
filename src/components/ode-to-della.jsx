import React, {PropTypes, Component} from 'react';

export default class ClassyDella extends Component {


  myStyle = {
    topStyle: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#e8e8e8',
      margin: '0 auto',
      borderRadius: '3px',
      width: '50vw',
      padding: '20px'
    },

    rowStyle: {
      borderBottom: '1px solid white',
      marginBottom: '5px',
      paddingBottom: '10px'
    }
  };

  static propTypes = {
    reasons: React.PropTypes.array,
    name: React.PropTypes.object
    };

  static defaultProps = {
    name: {
      first: 'Della'
    },
    reasons: []
  };

  //in classes, a constructor is called always, right when the class is being created
  //in this case, we want to access the props which are passed in, 'super' which basically just
  //says ignore whatever constructor this class was inherited from, I'm talking about me,
  //and then we can directly access the state, and set it to an object of our choosing
  // IMPORTANT NOTE - this is the only time you should be directly updating state,
  //any other time, you should do it through this.setState()
  constructor(props){
    super(props);
    this.state = {
      greatReasons: props.reasons
    }
  }

  setLocalReason = (event) => this.setState({
    localReason: event.target.value
  });

  componentWillReceiveProps(nextProps) {
    this.setState({
      greatReasons: nextProps.reasons
    })
  }

   saveReasonAction = () => {
     this.props.addReason(this.state.localReason);
     this.refs.addReasonInput.value = '';
   };

  removeAction = (reasonText) => (event) => this.props.removeReason(reasonText);

  filterReasons = (event) =>

  //setState exists on all react components, it overwrites the state that currently
  //exists with a new object, any conflicts in properties will have the new state overwriting
  //the old state - in this case, greatReasons below will overwrite the version defined before
    this.setState({
      //here I am accessing the props that exist on the component, the reasons prop particularly
      //I filter, the reason in the list of reasons passed in that contains
      //a value from the event.target.value (which is the value in the input) - if true
      //the reason is kept in the new list, which is set on this.state.greatReasons
      greatReasons: this.props.reasons
        .filter(reason => reason.toLowerCase().includes(event.target.value.toLowerCase()))});

  //onChange accepts a function, uncalled, and when it is called it passes in an event
  render = () => <div style={this.myStyle.topStyle}>
                    <h3><span className="name">{this.props.name.first}</span> is great for these reasons:</h3>
                    <input type="text" onChange={this.filterReasons}/>
                    {!this.state.greatReasons.length ? <h2>Loading...</h2> : '' }
                    {this.state.greatReasons.map((reason, i) =>
                      <div key={i}>
                        <h4 style={this.myStyle.rowStyle}>{reason}</h4> 
                        <button onClick={this.removeAction(reason)}>Remove</button>
                      </div>
                    )}
                    <input type="text" ref="addReasonInput" onChange={this.setLocalReason}/>
                    <button onClick={this.saveReasonAction}>Add Reason</button>
                 </div>
}
