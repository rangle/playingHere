const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search?q=BEYONCE&type=artist';

function setResults(peopleArray){
  return {
    type: 'SET_RESULTS',
    data: peopleArray
  }
}

export function doASearch() {
  return (dispatch) =>
  $.get(SEARCH_ENDPOINT)
  .then(res =>
    dispatch(setResults(res.artists.items.filter((k,i)=>i<5)))
  )
}
