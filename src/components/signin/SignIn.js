import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebaseUtils';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: this.state.email, password: this.state.password });
    console.log(this.state);
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Signin</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
