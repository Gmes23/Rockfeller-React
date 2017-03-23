// Log in/signup Page

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import styled from 'styled-components';

const Form = styled.form`
    position: absolute;
    top: 37%;
    left: 38%;
    height: 400px;
    width: 470px;
    // background-color: red;
`;

const TextFieldGroup = styled.input`
   border-bottom: 2px solid red;
   background-color: transparent;
   margin: 5px;
`;

const Button = styled.button`
   width: 100px;
   height: 50px;
   color: white;
   background-color: red;

`;

