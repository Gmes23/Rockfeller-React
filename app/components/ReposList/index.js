import React, { PropTypes } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';

function ReposList({ loading, error, listresults }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    console.log(error);
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (listresults !== false) {
    return <List items={listresults} component={RepoListItem} />;
  }

  else{
    console.log("we need something here")
  }

  return null;
}

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  listresults: PropTypes.any,
};

export default ReposList;


