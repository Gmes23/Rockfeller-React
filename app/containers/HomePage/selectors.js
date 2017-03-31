/**
 * Homepage selectors
 */

// import { createSelector } from 'reselect';

// const selectHome = (state) => state.get('home');

// const makeSelectUsername = () => createSelector(
//   selectHome,
//   (homeState) => homeState.get('username')
// );

// export {
//   selectHome,
//   makeSelectUsername,
// };




// what I added

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectSearchValue = () => createSelector(
  selectHome,
  (homeState) => homeState.get('searchvalue')
);

export {
  selectHome,
  makeSelectSearchValue,
};


