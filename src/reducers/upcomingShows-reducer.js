import {fromJS, Set} from 'immutable';

const INITIAL_STATE = fromJS({
  list: [
      {
        "id": 12044215,
        "url": "http://www.bandsintown.com/event/12044215?app_id=YOUR_APP_ID",
        "datetime": "2016-07-21T19:00:00",
        "ticket_url": "http://www.bandsintown.com/event/12044215/buy_tickets?app_id=YOUR_APP_ID&came_from=233",
        "artists": [
            {
            "name": "Silversun Pickups",
            "url": "http://www.bandsintown.com/SilversunPickups",
            "mbid": "b5bd9f88-962e-4730-84a7-795592ba42e8"
            },
            {
            "name": "Honduras",
            "url": "http://www.bandsintown.com/Honduras",
            "mbid": "2fb242f0-62ac-4d57-b3d0-f64676220422"
            }
        ],
        "venue": {
          "id": 1030028,
          "url": "http://www.bandsintown.com/venue/1030028",
          "name": "House of Blues",
          "city": "Boston",
          "region": "MA",
          "country": "United States",
          "latitude": 42.3471727,
          "longitude": -71.0957007
        },
        "ticket_status": "available",
        "on_sale_datetime": null
      },
      {
        "id": 12549162,
        "url": "http://www.bandsintown.com/event/12549162?app_id=YOUR_APP_ID",
        "datetime": "2016-07-21T19:30:00",
        "ticket_url": "http://www.bandsintown.com/event/12549162/buy_tickets?app_id=YOUR_APP_ID&came_from=233",
        "artists": [
            {
            "name": "50% off Summer Party Cruise",
            "url": "http://www.bandsintown.com/50%25OffSummerPartyCruise",
            "mbid": null
            }
        ],
        "venue": {
          "id": 1074431,
          "url": "http://www.bandsintown.com/venue/1074431",
          "name": "Bay State Cruise Company",
          "city": "Boston",
          "region": "MA",
          "country": "United States",
          "latitude": 42.3517272,
          "longitude": -71.0408624
        },
        "ticket_status": "unavailable",
        "on_sale_datetime": null
      }]
});

export default function upcomingShowsReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    case 'GET_SHOWS':
      // set action.data to the list of upcoming shows 
      return state.set('shows', Set(action.data));

    default:
      return state;
  }

}