import {fromJS, Set} from 'immutable';

const INITIAL_STATE = fromJS({
  searchList: Set([])
});

function artistSearchReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    case 'SET_RESULTS':
      return state.set('searchList', Set(action.data));

    default:
      return state;
  }

}


export default artistSearchReducer;
