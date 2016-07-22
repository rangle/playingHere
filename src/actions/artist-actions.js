const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search?q=BEYONCE&type=artist';

const INITIAL_STATE = fromJS({
  artistSearchList: Set([])
});


function setResults(peopleArray){
  return {
    type: 'SET_RESULTS',
    data: peopleArray
  }
}

export function doASearch() {
  return (dispatch) => {
    $.get(ALL_REASONS_ENDPOINT)
      .then(res => dispatch(setResults(res)))
  }
}
