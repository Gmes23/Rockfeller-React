import React, { Component } from 'react';
import styled from 'styled-components';

const My_logo = styled.div`
  height: 149px;
  width: 155px;
  background: rgb(1,168,158);
  text-align: end;
`;

const Logo_h1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -10px;
  font-size: 2.37em;
`;

const Span_text = styled.span`
  border-bottom: solid 3.2px #000000;
  display: inline;
  padding-bottom: 0px;
`;

class Logo extends Component {
  render() {
    return (
        <My_logo>
            <Logo_h1>
              <Span_text> ROCKE </Span_text>
            </Logo_h1>
            <Logo_h1>
              <Span_text> FELL </Span_text>
            </Logo_h1>
            <Logo_h1>
              <Span_text> ER </Span_text>
            </Logo_h1>
        </My_logo>
        );
  }
}

export default Logo;