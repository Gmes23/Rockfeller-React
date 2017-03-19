import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width:  125px;
  height: 102px;
  top: 45px;
  border-radius: 8px;
  border: solid 2px rgb(254,0,0);
  text-align: center;
  left: 19%;
`;

const MonthWrap = styled.div`
  height: 30px;
  width: 100%;
  border-bottom: solid 2px rgb(254,0,0);

`;

const Logo_h1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  margin-bottom: -10px;
`;

const Span_text = styled.span`
  border-bottom: solid 1.88px #fe0000;
  display: inherit;
  padding-bottom: 5px;
`;
const Logo_h2 = styled.h2`
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  margin-bottom: -10px;
  margin-top: 0px;
`;

const months = [ "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December" ];

class CalendarWidget extends Component {
  render() {
    var currentDate = new Date();
    var month =  months[currentDate.getMonth()];
    var date = currentDate.getDate();

    return (
        <Container>
          <MonthWrap>
            <Logo_h1>
              {month} 
            </Logo_h1>
          </MonthWrap>
            <Logo_h2>
              {date}
            </Logo_h2>
        </Container>
        );
  }
}

export default CalendarWidget;