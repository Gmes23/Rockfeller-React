import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 45%;
  height: 100%;
  width: 130px;
  padding-top: 64.8px;
  margin-left: 3%;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 74%;
  padding-top: 20px;
`;

const Selection = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
`;

const Span_text = styled.span`
  color: black;
  margin-left: 8px;
  margin-right: 5px;
  font-family: corporate-s, sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: .6em;
`;

const Select_option = styled.p`
  font-family: corporate-s, sans-serif;
  font-style: italic;
  font-weight: 400;
  color: red;
  margin: 0px;
  float: left;
  font-size: .65em;
`

const Select_option_2 = styled.p`
  font-family: corporate-s, sans-serif;
  font-style: italic;
  font-weight: 400;
  color: black;
  margin: 0px;
  float: right;
  font-size: .65em;
`

class LanguageOption extends Component {
  render() {
    return (
        <Container>
            <BottomContainer>
              <Selection>
                <Select_option>ENGLISH </Select_option>
                <Span_text> | </Span_text>
                <Select_option_2>SPANISH </Select_option_2>
              </Selection>
            </BottomContainer>
        </Container>
        );
  }
}

export default LanguageOption;