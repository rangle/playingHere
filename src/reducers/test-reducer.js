import {fromJS} from 'immutable';

const INITIAL_STATE = {
  reasonsForGreatness: ['Handsome', 'Smart', 'Funny', 'Reduxable']
};

function testReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {

    case 'ADD_REASON':
      return Object.assign({}, state, {reasonsForGreatness: state.reasonsForGreatness.concat([action.data])});

    default:
      return state;
  }

}

export default testReducer;
