import React from 'react';

class SignupForm extends React.Component {
    render() {
        return (
            <Form>
                <RegisterInput

                />
            </Form>
        )
    }
}






 













































// Log in/signup Page
/*
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


class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userscreenname: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post('/api/users')
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} >
                <h1> Register </h1>
                <TextFieldGroup
                  type="text"
                  placeholder="username"
                  value={this.state.userscreenname}
                  onChange={this.onChange}
                  name="userscreenname"
                 />

                  <TextFieldGroup
                  type="text"
                  placeholder="password"
                  value={this.state.email}
                  onChange={this.onChange}
                  name="userscreenname"
                 />

                  <TextFieldGroup
                  type="text"
                  placeholder="email"
                  value={this.state.password}
                  onChange={this.onChange}
                  name="userscreenname"
                 />

                  <TextFieldGroup
                  type="text"
                  placeholder="email"
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  name="userscreenname"
                 />

                 <Button> REGISTER </Button>

            </Form>
        )
    }
}


export function* loginSaga() {
  while(true) {
    const { user, pass } = yield take(LOGIN_REQUEST)
    try {
      let { data } = yield call(request.post, '/login', { user, pass });
      yield fork(loadUserData, data.uid);
      yield put({ type: LOGIN_SUCCESS, data });
    } catch(error) {
      yield put({ type: LOGIN_ERROR, error });
    }  
  }
}

export function* loadUserData(uid) {
  try {
    yield put({ type: USERDATA_REQUEST });
    let { data } = yield call(request.get, `/users/${uid}`);
    yield put({ type: USERDATA_SUCCESS, data });
  } catch(error) {
    yield put({ type: USERDATA_ERROR, error });
  }
}


export default SignupForm;*/
