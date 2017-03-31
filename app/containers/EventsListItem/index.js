import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import { makeSelectCurrentSearchValue } from 'containers/App/selectors';
import ListItem from 'components/ListItem';

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    let nameprefix = '';

    // Put together the content of the repository
    const content = (
      <div>
        <RepoLink href={item._embedded.venues[0].url} target="_blank">
          {nameprefix + item._embedded.venues[0].name}
        </RepoLink>
     
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item._embedded.events}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.object,
  currentSearchValue: React.PropTypes.string,
};

export default connect(createStructuredSelector({
  currentSearchValue: makeSelectCurrentSearchValue(),
}))(RepoListItem);




