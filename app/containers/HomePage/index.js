/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';



import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 30px;
  padding-bottom: 60px;
  height: 200px;
  display: flex;
`;

const InputSearch = styled.input`
  width: 90%;
  height: 100%;
  text-align: end;
  color: gray;
  padding-top: 45px;
  font-size: 2.8em;
  outline: 0;
  border-width: 0 0 2px 0;
  border-color: red;
  border-bottom: 2px solid red;
  font-family: district-pro, sans-serif;
  font-style: normal;
  font-weight: 100;
  margin-left: 10%;

  &:hover {
     background-color: #fff; 
  }
`;

const InputIcon = styled.div`
   float: right;
   height: 100%;
   margin-left: 5%;
   width: 11%;
   border-bottom: 2px solid red;
   padding-top: 40px;
`;

const Icon_eyeglass = styled.a`
  font-size: 3.5em;
`;




export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state artist is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <div>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Search upcoming concerts by your favorite Artist' },
          ]}
        />
        
        <SearchWrapper>
            <form onSubmit={this.props.onSubmitForm} autoComplete="off">
              <label htmlFor="username">
                <InputSearch
                  id="username"
                  type="text"
                  placeholder="Search"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername} 
                  autoComplete="off"
                />
              </label>
            </form>
             <InputIcon>
                  <Icon_eyeglass className="material-icons">search</Icon_eyeglass>
             </InputIcon>
        </SearchWrapper>
        <ReposList {...reposListProps} />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
