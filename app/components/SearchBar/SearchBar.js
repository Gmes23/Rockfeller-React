import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 54%;
  padding-top: 7px;
  margin-left: 5px;
  display: flex;
`;

const InputSearch = styled.input`
  width: 80%;
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



class SearchBar extends Component {
  render() {
    return (
        <Container>
          <InputSearch placeholder="Search" type="text" />
          <InputIcon>
            <Icon_eyeglass className="material-icons">search</Icon_eyeglass>
           </InputIcon>
        </Container>
        );
  }
}

export default SearchBar;