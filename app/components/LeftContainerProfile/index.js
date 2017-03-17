import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import SocialLinks from '../SocialLinks/social_links';
import ProfileContainer from './profile';
import LinksContainer from './about_links';


const Wrapper = styled.div`
  position: absolute;
  top: 250px;
  width: 20%;
  padding-left: 4%;
  padding-right: 4%;
  // height:  100vh;

`;

class LeftContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

          <Wrapper> 
             <ProfileContainer />
             <LinksContainer />
             <SocialLinks />
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
