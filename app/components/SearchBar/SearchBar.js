import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors2';

import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 54%;
  padding-top: 7px;
  margin-left: 5px;
  display: flex;
`;

const InputSearch = styled.input`
  width: 72%;
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
  z-index: 1000;
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



export class SearchBar extends Component {
  componentDidMount() {
    if (this.props.artist && this.props.artist.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, artistevents } = this.props;
    const artisteventsListProps = {
      loading,
      error,
      artistevents,
    };


    return (
        <Container>
          {/*<InputSearch placeholder="Search" type="text" />
          <InputIcon>
            <Icon_eyeglass className="material-icons">search</Icon_eyeglass>
           </InputIcon>*/}

              
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="artist">
                <InputSearch
                  id="Artist"
                  type="text"
                  placeholder="Search"
                  value={this.props.artist}
                  onChange={this.props.onChangeArtist}
                />
                <InputIcon>
                  <Icon_eyeglass className="material-icons">search</Icon_eyeglass>
                </InputIcon>
              </label>
            </form>
        </Container>
        );
  }
}



SearchBar.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
   artistevents: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  artist: React.PropTypes.string,
  onChangeArtist: React.PropTypes.func,
};


// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeArtist: (evt) => dispatch(changeArtist(evt.target.value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

// const mapStateToProps = createStructuredSelector({
//   artistevents: makeSelectArtistEvents(),
//   artist: makeSelectArtist(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

export default SearchBar;