import React from 'react';

export default class ArtistList extends React.Component {

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

  constructor(props){
    super(props);
    this.state = {
      artistListFiltered: props.listIn
    };
  }



  render = () => {

    return <section style={this.myStyle.mainStyle} >
              <div class="container">
                {/*Table headers*/}
                <div style={this.myStyle.topRowStyle} className="row">
                  <div className="col-md-1">Name</div>
                  <div className="col-md-2">Image</div>
                  <div className="col-md-1">Location</div>
                  <div className="col-md-8">Bio</div>
                </div>
                {/*Table Info. Map/Loop over the artist array. Since each element is an object , get its values to display*/}
                {this.state.artistListFiltered.map(artist =>
                <div key={artist.name + 'row'} style={this.myStyle.rowStyle} className="row">
                  <div className="col-md-1"><a href={artist.link}>{artist.name}</a></div>
                  <div className="col-md-2"><img style={this.myStyle.imgSize} src={artist.imgLink}></img></div>
                  <div className="col-md-1">{artist.location}</div>
                  <div className="col-md-8">{artist.bio}</div>
                </div>)}
              </div>
            </section>
    }
  }
