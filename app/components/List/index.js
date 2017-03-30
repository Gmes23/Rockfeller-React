import React from 'react';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
// make request if no value in username
//     function* getRepos() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());

//   const requestURL = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=ugDKj6qVDvxl39iQzLiY5VR2c173RABy&keyword=${username}&size=5`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }
  }

  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;
