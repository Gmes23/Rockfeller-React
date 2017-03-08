import React, { Component } from 'react';
import styled from 'styled-components';

import Img from './Img';
import Profile from './profile.png'

const Container = styled.div`
  height: 40%;
  width: 145px;
  padding-left: 15px;
`;

const Userimg = styled.div`
  border-radius: 50%;
  width: 95px;
  height: 95px; 
  border: 1px solid red;
  background-image: url(./profile.png);
`;

const Username_container = styled.div`
  width: 100%;
  height: 45px;
`;

const Welcome = styled.p`
  font-family: museo-sans, sans-serif;
  font-style: normal;
  font-weight: 100;
  margin: 0px;
  color: rgb(191,191,191);
  margin-top: 15px;
`;

const User_name = styled.p`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin: 0px;
`;

const Span = styled.span`
  position: absolute;
  border-bottom: solid 2px #fe0000;
  width: 15px;
  left: 3.8%;
`;

const Profile_icon = styled.div`
  width:100%;
  margin-top: 10px
  vertical-align: text-bottom;
`;

const My_profile = styled.p`
  font-family: museo-sans, sans-serif;
  font-style: normal;
  font-weight: 100;
  margin: 0px;
  font-size: 13px;
  color: rgb(191,191,191);
`;

const Alink= styled.a`
  vertical-align: text-bottom;
`;

class ProfileContainer extends Component {
  render() {
    return (
        <Container>
            <Userimg>
              <Img src={Profile} alt="something" />
            </Userimg>
            <Username_container>
                <Welcome>Welcome,</Welcome>
                {/*max charcters allowed*/}
                <User_name> John Trevskye </User_name>
                <Span />
            </Username_container>
            <Profile_icon>
                <Alink  className="material-icons">person</Alink >
                <My_profile> My Profile </My_profile>
            </Profile_icon>
        </Container>
        );
  }
}

export default ProfileContainer;