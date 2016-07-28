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
  .then(res =>
    dispatch(setResults(res.artists.items.filter((k,i)=>i<5)))
  )
}


export function doABITArtistSearch(nameToSearch) {
  var url=BIT_SEARCH_ENDPOINT_BEGIN;
  return (dispatch) =>
  $.get(url)
    .then(res => dispatch(setEventsResults(res))
  )
}
