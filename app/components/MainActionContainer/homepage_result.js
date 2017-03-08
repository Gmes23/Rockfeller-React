import React, { Component } from 'react';
import styled from 'styled-components';

import Img from './Img';
import PlaceholderB from './placeholderC.jpg'


const Container = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 20px;
  display: flex;
`;

const DateResultWrap = styled.div`
  width:  11%;
  height: 100%;
  background-color: red;
`;

const ResultImgWrap = styled.div`
  height: 100%;
  width: 55%;
`;

const ResultDescriptionWrap = styled.div`
  width: 34%;
  height: 100%;
`;

const DescriptionTitle = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
`;

const TitleH1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
`;

const ArrowHiddenIcon = styled.a`
  color: red;
  margin-left: 18px;
  position: relative;
  bottom: 0px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const ResultDescriptionPCont = styled.div`
  width: 100%;
  padding-left: 5%;
`;
 
 const ResultDescription_P = styled.p`
  font-family: museo-sans, sans-serif;
  font-style: normal;
  font-weight: 100;
 `;

class HomePageResult extends Component {
  render() {
    return (
        <Container>
            <DateResultWrap />
            <ResultImgWrap>
              <Img src={PlaceholderB} alt="something" />
            </ResultImgWrap>
            <ResultDescriptionWrap>
                <DescriptionTitle>
                    <TitleH1> Wacka Flocka </TitleH1>
                    <ArrowHiddenIcon className="material-icons">&#xE317;</ArrowHiddenIcon>
                </DescriptionTitle>
                <ResultDescriptionPCont> 
                  <ResultDescription_P>
                     Lorem Ipsum is simply dummy text 
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever
                      nce the 1500s, when an unknown printe
                      r took a galley 
                  </ResultDescription_P>
                </ResultDescriptionPCont>
            </ResultDescriptionWrap>
        </Container>
        );
  }
}

export default HomePageResult;