import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import ProfileContainer from './profile';

const Right_navcontainer = styled.div`
  width: 100%;
  height: 100%;
  // might change to percentage later on
  padding-left: 155px;
  padding-top: 13px;
  display: flex;
`;

const Wrapper = styled.div`
  width: 20%;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 4%;
  height:  100vh;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

class LeftContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

          <Wrapper> 
             <ProfileContainer />
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

export default LeftContainer;
