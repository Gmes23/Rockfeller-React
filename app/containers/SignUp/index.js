import React from 'react';
import map from 'lodash/map';
import TextFieldGroup from 'components/common/TextFieldGroup';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { userSignupRequest, isUserExists } from './actions';
import validateInput from '../../../server/middlewares/routes/shared/validation/signupvalidation';
import { Link } from 'react-router';
import { login } from '../SignIn/authActions';
import styled from 'styled-components';

const SignUpPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
`;


const Form = styled.form`
  position: absolute;
  top: 20%;
  left: 15vw;
`;

const InputDiv = styled.div`
  // display: table-caption;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  background-color: red;
`;

const ButtonBack = styled(Link)`
  position: absolute;
  height: 50px;
  padding-top: 1.5vh;
  width: 100px;
  text-align: center;
  border: 2px solid red;
  margin-left: 35%;
`;

const ButtonHolder = styled.div `
  display: flex;
`;

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenname: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          console.log(res.data)
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

    onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.context.router.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }


  render() {
    const { errors } = this.state;
 
    return (
    <SignUpPage>
      <Form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

      <InputDiv>
        <TextFieldGroup
          error={errors.screenname}
          label="Username"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.screenname}
          field="screenname"
        />
      </InputDiv>

      <InputDiv>
        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          field="email"
        />
      </InputDiv>

      <InputDiv>
        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />
      </InputDiv>

      <InputDiv>
        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />
      </InputDiv>

        <ButtonHolder>
          <Button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Sign up
          </Button>
          <ButtonBack to="/"> Back </ButtonBack>
        </ButtonHolder>

      </Form>
    </SignUpPage>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// export default SignupForm;

export default connect(null, { userSignupRequest, isUserExists })(SignupForm);


