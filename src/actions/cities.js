const CONCERTS_LIST = 'http://api.bandsintown.com/events/search.json?page=1&app_id=playingHere&location='; 

export function setSelectedCity(cityObj){
  return {
    type: 'SELECT_CITY',
    data: cityObj
  }
}

export function getConcerts(lat, long) {
  return (dispatch) => {
    $.get(CONCERTS_LIST + lat + ',' + long)
      .then(res => dispatch({
      	data: res,
      	type: 'GET_CONCERTS'
      }))
  }
}
