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
  // height:  100vh;

`;

const Button = styled(Link)`
  width: 100px;
  height: 50px;
  background-color: red;
  color: white;
  margin: 5px;
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
        <Button onClick={this.logout.bind(this)}> LOGOUT </Button>
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
               <div>
            {/*<Button to='/login'>LOGIN</Button>
            <Button to='/sign-up'>REGISTER</Button>*/}
       </div> 
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

