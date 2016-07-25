import React from 'react';

export default class ArtistSearch extends React.Component {

  static propTypes = {
    artistNames: React.PropTypes.array,
    };

    static defaultProps = {
      artistsSearched: []
    };

    componentWillReceiveProps(nextProps) {
      console.log(nextProps.artistsSearched);
      this.setState({
        artistReturnedList: nextProps.artistsSearched
      })
    }


    constructor(props){
      super(props);
      this.state = {
        artistReturnedList: props.artistsSearched
      }
    }

  doASearchAction = (name) => this.props.doASearch(name);


  render = () => {
    console.log('I am rendering search!', this);

    return <div>
      <h3>Search For Some Artists</h3>
        <input type="text"/>
        <button onClick={()=>this.doASearchAction(name)}>Search Artist</button>
        <div> List show here</div>
      </div>
    }
  }
