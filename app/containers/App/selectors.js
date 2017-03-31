import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCurrentSearchValue = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentSearchValue')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);


const makeSelectListResults = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['searchData', 'listresultsresponse'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectCurrentSearchValue,
  makeSelectLoading,
  makeSelectError,
  makeSelectListResults,
  makeSelectLocationState,
};

