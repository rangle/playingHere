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

//not sure what this is for?
  static propTypes = {
    artistNames: React.PropTypes.array,
    concertNames: React.PropTypes.array

  };

  static defaultProps = {
    artistsSearched: [],
    concertSearched: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      artistReturnedList: nextProps.artistsSearched,
      concertReturnedList: nextProps.concertSearched

    })
  }


  constructor(props){
    super(props);
    this.state = {
      artistReturnedList: props.artistsSearched,
      concertReturnedList: props.concertSearched

    }
  }

  doASpotifyArtistSearchAction = () => {
    var searchName=this.refs.searchArtistTextBox.value;
    this.props.doASpotifyArtistSearch(searchName);
  }

  doABITArtistSearchAction = (searchName) => {
    this.props.doABITArtistSearch(searchName);
    console.log("list " +this.state.concertReturnedList);
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
        <div className="col-md-3">Name</div>
        <div className="col-md-3">Image</div>
        <div className="col-md-3">Genre</div>
        <div className="col-md-3">Next Concert</div>

      </div> : '' }

      {/*Table Info. Map/Loop over the artist array. */}

      {this.state.artistReturnedList.map((artistObj, i) =>
        <div key={i} style={this.myStyle.rowStyle} className="row">
          <div className="col-md-3"><a href={artistObj.external_urls? artistObj.external_urls.spotify : ''}>{artistObj.name}</a></div>
          <div className="col-md-3"><img style={this.myStyle.imgSize} src={artistObj.images ? artistObj.images[0].url: 'images/della.jpg'}></img></div>
          <div className="col-md-3">{artistObj.genres ? artistObj.genres[0]: 'No Genre'}</div>
          <div className="col-md-3">{artistObj.concerts.formatted_datetime+ " in "+ artistObj.concerts.formatted_location}</div>

        </div>)}

        <div>Practicing Bands in Town API</div>
        <button onClick={()=>this.doABITArtistSearchAction("a")}>Search Artist on BIT</button>
        <div>{this.state.concertReturnedList[0].formatted_datetime+ " in "+ this.state.concertReturnedList[0].formatted_location}</div>

        </div>
      </section>
    }
  }
