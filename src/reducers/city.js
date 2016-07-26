import {fromJS} from 'immutable';

const INITIAL_STATE = fromJS({
  selected: {
    label: 'Toronto',
    location: {
      lat: 43.652644,
      lng: -79.381769
    }
  },

  concerts: [],

  list: ['Paris', 'Toronto', 'New York', 'London (UK)', 'LA']
    .map((city, i) => ({
      label: city,
      location: {
        lat: 48.8 - (i / 2),
        lng: 2.35 + (i * 1.25)
      }
    }))
});

export default function cityReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    case 'SELECT_CITY':
      return state.set('selected', fromJS(action.data));

    case 'GET_CONCERTS':
      return state.set('concerts', fromJS(action.data));

    default:
      return state;
  }

}
