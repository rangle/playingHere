const SEARCH_ENDPOINT_BEGIN = 'https://api.spotify.com/v1/search?q=';
const SEARCH_ENDPOINT_END = '&type=artist';

function setResults(peopleArray){
  return {
    type: 'SET_RESULTS',
    data: peopleArray
  }
}

export function doASearch(nameToSearch) {
  console.log("in"+ nameToSearch);

  var url=SEARCH_ENDPOINT_BEGIN+nameToSearch+SEARCH_ENDPOINT_END;
  console.log('url is '+ url);
  return (dispatch) =>
  $.get(url)
  .then(res =>
    dispatch(setResults(res.artists.items.filter((k,i)=>i<5)))
  )
}
