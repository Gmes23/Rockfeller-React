import React, { Component } from 'react';
import styled from 'styled-components';

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

class ProfileContainer extends Component {
  render() {
    return (
        <Container>
            <Userimg />
        </Container>
        );
  }
}

export default ProfileContainer;