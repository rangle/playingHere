import {fromJS, Set} from 'immutable';

const INITIAL_STATE = fromJS({
  searchList: Set([]),
  concertSearchList: Set([{"id":11974828,"title":"Skrillex @ ILESONIQ in Montreal, Canada","datetime":"2016-08-06T19:00:00","formatted_datetime":"Today","formatted_location":"Montreal, Canada","ticket_url":"http://www.bandsintown.com/event/11974828/buy_tickets?app_id=playingHere\u0026artist=Skrillex\u0026came_from=67","ticket_type":"Tickets","ticket_status":"available","on_sale_datetime":null,"facebook_rsvp_url":"http://www.bandsintown.com/event/11974828?app_id=playingHere\u0026artist=Skrillex\u0026came_from=67","description":null,"artists":[{"name":"Skrillex","mbid":"ae002c5d-aac6-490b-a39a-30aa9e2edf2b","image_url":"https://s3.amazonaws.com/bit-photos/large/6278128.jpeg","thumb_url":"https://s3.amazonaws.com/bit-photos/thumb/6278128.jpeg","facebook_tour_dates_url":"http://www.bandsintown.com/Skrillex/facebookapp?came_from=67","facebook_page_url":"https://www.facebook.com/skrillex","tracker_count":2133399,"url":"Skrillex","website":"http://www.skrillex.com"}],"venue":{"name":"ILESONIQ","place":"PARTERRE DU PARC JEAN-DRAPEAU","city":"Montreal","region":"10","country":"Canada","latitude":45.5,"longitude":-73.5833333}}])
});

function artistSearchReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    case 'SET_RESULTS':
      return state.set('searchList', Set(action.data));

    case 'SET_EVENTS_RESULTS':
        return state.set('concertSearchList', Set(action.data));

    default:
      return state;
  }

}


export default artistSearchReducer;
