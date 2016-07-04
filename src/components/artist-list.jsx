import React from 'react';

export default class ArtistList extends React.Component {

constructor(props){
  super(props);
  this.state = {
    artistListFiltered: props.listIn
  };
}



render = () => <div>
<h3>Here are some artist to check out:</h3>
<table>
  <tr><td>Artist</td><td>Location</td><td>Bio</td></tr>
  {this.state.artistListFiltered.map(artist => <tr>
    <td><a href={artist.link}>{artist.name}</a></td>
    <td>{artist.location}</td>
    <td>{artist.bio}</td></tr>)}

</table>
</div>




}
