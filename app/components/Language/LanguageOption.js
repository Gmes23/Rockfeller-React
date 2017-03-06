import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 130px;
  background: rgb(1,168,158);
  padding-top: 75.8px;
  margin-left: 3%;
`;

const BottomContainer = styled.div`
  background-color: yellow;
  width: 100%;
  height: 74%;
  padding-top: 20px;
`;

const Selection = styled.div`
  width: 100%;
  height: 21px;
  background-color: purple;
  display: flex;
`;

const Span_text = styled.span`
  color: black;
`;

const Select_option = styled.p`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  color: red;
  margin: 0px;
  float: left;
`

const Select_option_2 = styled.p`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  color: black;
  margin: 0px;
  float: right;
`

class LanguageOption extends Component {
  render() {
    return (
        <Container>
            <BottomContainer>
              <Selection>
                <Select_option>English </Select_option>
                <Span_text> | </Span_text>
                <Select_option_2>Spanish </Select_option_2>
              </Selection>
            </BottomContainer>
        </Container>
        );
  }
}

export default LanguageOption;