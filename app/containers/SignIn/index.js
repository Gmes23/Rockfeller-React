import React from 'react';
import TextFieldGroup from 'components/common/TextFieldGroup';
import validateInput from '../../../server/middlewares/routes/shared/validation/loginvalidation';
import { connect } from 'react-redux';
import { login } from './authActions';

import styled from 'styled-components';

const Form = styled.form`
    position: absolute;
    left: 40%;
    top: 30%;
`;

const Button = styled.button`
    background-color: red;
    color: white;
    width: 100px;
    height: 50px;'
    cursor: pointer;
`;

const AlertErrorDiv = styled.div`
    position: relative;
    border: 1px solid black;
    margin: 2%;
    color: red;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        { errors.form && <AlertErrorDiv>{errors.form}</AlertErrorDiv> }

        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <Button disabled={isLoading}>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
