import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 20px;
  background-color: yellow;
  display: flex;
`;

const DateResultWrap = styled.div`
  width:  11%;
  height: 100%;
  background-color: red;
`;

const ResultImgWrap = styled.div`
  height: 100%;
  background-color: pink;
  width: 55%;
`;


class HomePageResult extends Component {
  render() {
    return (
        <Container>
            <DateResultWrap />
            <ResultImgWrap />
        </Container>
        );
  }
}

export default HomePageResult;