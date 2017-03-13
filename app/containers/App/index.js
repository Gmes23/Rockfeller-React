/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';


import request from 'utils/request';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LeftContainer from 'components/LeftContainerProfile';
import MainActionContainer from 'components/MainActionContainer';
import withProgressBar from 'components/ProgressBar';

import SearchArtist from 'components'

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0;
  flex-direction: column;
`;
// http://app.ticketmaster.com/discovery/v1/events.json?keyword=Queen&apikey=xxx
const API_KEY = 'ugDKj6qVDvxl39iQzLiY5VR2c173RABy'; 


export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <Header />
      <LeftContainer />
      {React.Children.toArray(props.children)}
      {/*<Footer />*/}
      <MainActionContainer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
