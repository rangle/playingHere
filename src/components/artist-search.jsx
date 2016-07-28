import React from 'react';

export default class ArtistSearch extends React.Component {


  myStyle = {

    mainStyle: {
      backgroundColor: '#f2f2f2'
    },

    rowStyle: {
      margin:'50px'
    },

    topRowStyle: {
      border: '1px solid black',
      backgroundColor: '#137DA1'

    },

    imgSize: {
      height:'80px',
      width:'80px'
    }


  };


  static propTypes = {
    artistNames: React.PropTypes.array,
  };

  static defaultProps = {
    artistsSearched: []
  };

  componentWillReceiveProps(nextProps) {
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

  doASpotifyArtistSearchAction = () => {
    var searchName=this.refs.searchArtistTextBox.value;
    this.props.doASpotifyArtistSearch(searchName);
  }

  doABITArtistSearchAction = () => {
    var searchName=this.refs.searchArtistTextBox.value;
    this.props.doABITArtistSearch(searchName);
  }

  render = () => {
    console.log('I am rendering search!', this);
    return <section style={this.myStyle.mainStyle}>
      <div className="container">
        <h3>Search For Some Artists</h3>
        <input ref="searchArtistTextBox" type="text"/>
        <button onClick={()=>this.doASpotifyArtistSearchAction()}>Search Artist</button>

        {/*Table headers*/}
        {!this.state.artistReturnedList.length ? <h4>Loading...</h4> : '' }
        {this.state.artistReturnedList.length ?   <div style={this.myStyle.topRowStyle} className="row">
        <div className="col-md-4">Name</div>
        <div className="col-md-4">Image</div>
        <div className="col-md-4">Genre</div>
      </div> : '' }

      {/*Table Info. Map/Loop over the artist array. */}

      {this.state.artistReturnedList.map((artistObj, i) =>
        <div key={i} style={this.myStyle.rowStyle} className="row">
          <div className="col-md-4"><a href={artistObj.external_urls.spotify}>{artistObj.name}</a></div>
          <div className="col-md-4"><img style={this.myStyle.imgSize} src={artistObj.images[0].url}></img></div>
          <div className="col-md-4">{artistObj.genres[0]}</div>
        </div>)}

        <div>Practiincg Bands in Town API</div>
        <button onClick={()=>this.doABITArtistSearchAction()}>Search Artist on BIT</button>

      </div>
    </section>
  }
}
