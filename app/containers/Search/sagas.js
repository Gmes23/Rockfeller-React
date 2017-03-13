import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from 'utils/request';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* loadEvents(action) {
   const requestURL = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=ugDKj6qVDvxl39iQzLiY5VR2c173RABy`;

   try {
      const user = yield call(request, requestURL);
      yield put({type: "USER_FETCH_SUCCEEDED", events: events});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", loadEvents);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", loadEvents);
}

export default mySaga;