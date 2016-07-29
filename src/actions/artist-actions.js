const SPOTIFY_SEARCH_ENDPOINT_BEGIN = 'https://api.spotify.com/v1/search?q=';
const SPOTIFY_SEARCH_ENDPOINT_END = '&type=artist';
const BIT_SEARCH_ENDPOINT_BEGIN = 'http://api.bandsintown.com/artists/Skrillex/events.json?api_version=2.0&app_id=playingHere';

function setResults(peopleArray){
  return {
    type: 'SET_RESULTS',
    data: peopleArray
  }
}

function setEventsResults(eventsArray){
  return {
    type: 'SET_EVENTS_RESULTS',
    data: eventsArray
  }
}

export function doASpotifyArtistSearch(nameToSearch) {
  var url=SPOTIFY_SEARCH_ENDPOINT_BEGIN+nameToSearch+SPOTIFY_SEARCH_ENDPOINT_END;
  return (dispatch) =>
  $.get(url)
  .then(res => {
    let top5Artist = res.artists.items.filter((k,i)=>i<1);
    $.when(...top5Artist.map(artist => doABITArtistSearch(artist.name)))
    .done((...results) => {
      let formattedConcertInfo = results.map(subArr => subArr[0] ? subArr[0] : []);
      let combinedInfo = top5Artist.map((artist, i) => Object.assign({}, artist, {concerts: formattedConcertInfo[i]}))
      dispatch(setResults(combinedInfo));
    })
  }
)
}


export function doABITArtistSearch(nameToSearch) {
  var url = `http://api.bandsintown.com/artists/${nameToSearch}/events.json?api_version=2.0&app_id=playingHere`;
  return $.get(url)
}


function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}
