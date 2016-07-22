import React from 'react';

export default class ArtistSearch extends React.Component {

  render = () => {
    console.log('I am rendering search!', this);

    return <div>
      <h3>Search For Some Artists</h3>
        <input type="text"/>
        <button>Search Artist</button>
        <div> List show here</div>
      </div>
    }
  }
