import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { logout } from '../../containers/SignIn/authActions';
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
`;

const Button = styled(Link)`
  width: 100px;
  height: 30px;
  margin-bottom: 10%;
  float: left;
  display: block;
  color: white;
  font-weight: 600;
  border: 2px solid red;
  text-align: center;
`;

const LogOutButton = styled.button`
  color: black;
  cursor: pointer;
   &:hover {
    color: red;
  }
`;

class LeftContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
 
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  
  
  render() {

    const { isAuthenticated } = this.props;

    const userLinks = (
      <div>
        <ProfileContainer />
        <LogOutButton onClick={this.logout.bind(this)}> LOGOUT </LogOutButton>
      </div>
    );

    const guestLinks = (
       <div>
            <Button to='/login'>LOGIN</Button>
            <Button to='/sign-up'>REGISTER</Button>
       </div> 
    );

    return (
          <Wrapper>
            { isAuthenticated ? userLinks : guestLinks }
            <LinksContainer />
            <SocialLinks />
          </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  console.log(state._root.entries[3][1].isAuthenticated);
  return {
    isAuthenticated: state._root.entries[3][1].isAuthenticated
  };
}

export default connect(mapStateToProps, { logout })(LeftContainer);

