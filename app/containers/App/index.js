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
import Logo from 'components/Logo/Logo';
import MobileMenu from 'components/MenuMobile/MenuMobile';
import SearchBar from 'components/SearchBar/SearchBar';

import FeatureWidget from 'components/FeaturesNav/FeaturesNav';
import CalendarWidget from 'components/Calendar/Calendar';
import LanguageOption from 'components/Language/LanguageOption';


const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0;
  flex-direction: column;
`;

const MobileWrapper = styled.div`
  @media screen and (max-width: 360px) {
    position: absolute;
    top: 20%;
    height: 100px;
    width: 100%;
    paddin-left: 10%;
    paddin-right: 10%;
    display: flex;
  }
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Rockfeller - Tickets for your events"
        defaultTitle="Rockfeller"
        meta={[
          { name: 'description', content: 'a ticket online store' },
        ]}
      />
      <Logo />
      <SearchBar />
      <MobileWrapper>
        <FeatureWidget />
        <CalendarWidget />
        <LanguageOption />
        <MobileMenu />
        <LeftContainer />
      </MobileWrapper>
      
      {React.Children.toArray(props.children)}
      {/*<Footer />*/}
      {/*<MainActionContainer />*/}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
