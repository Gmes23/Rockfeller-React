import { fromJS } from 'immutable';

import {
  CHANGE_SEARCHVALUE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  searchvalue: 'music',
});



function homeReducer(state = initialState, action) {

  switch (action.type) {
    case CHANGE_SEARCHVALUE:

      // Delete prefixed '@' from the github username
      return state
        .set('searchvalue', action.searchname.replace(/@/gi, ''))
    default:
      return state
  }
}

export default homeReducer;



