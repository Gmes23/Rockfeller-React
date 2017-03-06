import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 125px;
  border-radius: 8px;
  border: solid 2px rgb(254,0,0);
  background: rgb(1,168,158);
  text-align: center;
  padding-top: 7px;
`;

const Logo_h1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -10px;
  font-size: 1.2em;
`;

const Span_text = styled.span`
  border-bottom: solid 2.88px #fe0000;
  display: inherit;
  padding-bottom: 5px;
`;
const Logo_h2 = styled.h2`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -10px;
  font-size: 4.2em;
  margin-top: 0px;
`;

class CalendarWidget extends Component {
  render() {
    return (
        <Container>
            <Logo_h1>
              <Span_text> August </Span_text>
            </Logo_h1>
            <Logo_h2>
              22
            </Logo_h2>
        </Container>
        );
  }
}

export default CalendarWidget;