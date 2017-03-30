// n state.set('yourStateVariable', true);
//  */
// import { fromJS } from 'immutable';

// import {
//   CHANGE_USERNAME,
// } from './constants';

// const initialState = fromJS({
//   username: 'something',
// });

// function homeReducer(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_USERNAME:

//       return state
//         .set('username', action.name.replace(/@/gi, ''))
//     default:
//       return state
//   }
// }

// export default homeReducer;
