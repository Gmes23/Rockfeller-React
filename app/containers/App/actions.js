
import {
  LOAD_LISTRESULTS,
  LOAD_LISTRESULTS_SUCCESS,
  LOAD_LISTRESULTS_ERROR,
} from './constants';

/**
 * Load the list results , this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadListResults() {
  return {
    type: LOAD_LISTRESULTS,
  };
}

/**
 * Dispatched when the listresults are loaded by the request saga
 *
 * @param  {array} listresults The repository data
 * @param  {string} searchvalue The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function listresultsLoaded(listresults, searchvalue) {
  return {
    type: LOAD_LISTRESULTS_SUCCESS,
     listresults: listresults._embedded.events,
     searchvalue,
  };
}

/**
 * Dispatched when loading the result data fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}





