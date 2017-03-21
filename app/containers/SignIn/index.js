// Log in/signup Page

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';



const Form = styled.form`
    position: absolute;
    top: 37%;
    left: 38%;
    height: 400px;
    width: 470px;
  background-color: red;
`;


export class SignIn extends React.PureComponent {
    render(

    ){
        return(
                 <Form>
          <label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />

    <button type="submit">Login</button>
     </Form>
  
        )
    }
//   return (
//      <Form>
//           <label><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" name="uname" required />

//     <label><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required />

//     <button type="submit">Login</button>
//      </Form>
//   );
}

