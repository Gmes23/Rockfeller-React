import { fromJS } from 'immutable';

import {
  LOAD_LISTRESULTS_SUCCESS,
  LOAD_LISTRESULTS,
  LOAD_LISTRESULTS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentSearchValue: false,
  searchData: {
    listresultsresponse: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LISTRESULTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['searchData', 'listresultsresponse'], false);
    case LOAD_LISTRESULTS_SUCCESS:
      return state
        .setIn(['searchData', 'listresultsresponse'], action.listresults)
        .set('loading', false)
        .set('currentSearchValue', action.searchvalue);
    case LOAD_LISTRESULTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;




