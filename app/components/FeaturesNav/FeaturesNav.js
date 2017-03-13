import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 165px;
  margin-left: 8%;
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

const Logo_h1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -10px;
  font-size: 1.2em;
`;

const Span_text = styled.span`
  border-bottom: solid 2px #fe0000;
  display: inherit;
`;

const Logo_h2 = styled.h2`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -10px;
  font-size: 4.2em;
  margin-top: 0px;
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
  margin-left: 12%;
  float: right;
`

class CalendarWidget extends Component {
  render() {
    return (
        <Container>
            <Logo_h1>
              <Span_text> VENUES </Span_text>
            </Logo_h1>
            <BottomContainer>
              <Selection>
                <Select_option>RF </Select_option>
                <Select_option_2>Rockfeller </Select_option_2>
              </Selection>
              <Selection>
                <Select_option>RF </Select_option>
                <Select_option_2>Rockfeller </Select_option_2>
              </Selection>
              <Selection>
                <Select_option>RF </Select_option>
                <Select_option_2>Rockfeller </Select_option_2>
              </Selection>
            </BottomContainer>
        </Container>
        );
  }
}

export default CalendarWidget;