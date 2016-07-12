import {fromJS, Set} from 'immutable';

const INITIAL_STATE = fromJS({
  reasonsForGreatness: Set(['Handsome', 'Smart', 'Funny', 'Reduxable'])
});

function testReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    case 'ADD_REASON':
      return state.update('reasonsForGreatness', reasons => reasons.add(action.data));

    case 'REMOVE_REASON':
      return state.update('reasonsForGreatness', reasons => reasons.remove(action.data));

    default:
      return state;
  }

}

export default testReducer;
