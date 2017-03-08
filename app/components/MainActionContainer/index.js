import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import HomePage from './homepage';

const Wrapper = styled.div`
  position: absolute;
  right: 0px
  top: 210px;
  width: 86.69%;
  padding-right: 4%;
  padding-left: 153px;
`;

class MainActionContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

          <Wrapper> 
             <HomePage />
          </Wrapper>
  
      
      // <div> helo </div>
      /*<div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>*/
    );
  }
}

export default MainActionContainer;