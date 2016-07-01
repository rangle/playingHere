import React from 'react';

export default class ClassyDella extends React.Component {


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
        .filter(reason => reason.toLowerCase()
        .includes(event.target.value.toLowerCase()))
    });

  //onChange accepts a function, uncalled, and when it is called it passes in an event
  render = () => <div style={this.myStyle.topStyle}>
                    <h3>Della is great for these reasons:</h3>
                    <input type="text" onChange={this.filterReasons}/>
                    {this.state.greatReasons.map(reason => <h4 style={this.myStyle.rowStyle}>{reason}</h4>)}
                 </div>
}