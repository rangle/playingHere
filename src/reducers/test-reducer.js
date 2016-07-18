import {fromJS, Set} from 'immutable';

const INITIAL_STATE = fromJS({
  reasonsForGreatness: Set([])
});

function testReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    case 'ADD_REASON':
      return state.update('reasonsForGreatness', reasons => reasons.add(action.data));

    case 'REMOVE_REASON':
      return state.update('reasonsForGreatness', reasons => reasons.remove(action.data));

    case 'SET_REASONS':
      return state.set('reasonsForGreatness', Set(action.data));

    default:
      return state;
  }

}

export default testReducer;
