import React, { Component } from 'react';

import FormInput from './FormInput';
import CustomButton from '../customButton/CustomButton';
import './SignIn.style.scss';

import { auth, signInWithGoogle } from '../../firebase/Firebase.utils'

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error.message);
    }

    this.setState({ email: '', password: '' });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleOnChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleOnChange}
            label='Password'
            autoComplete = 'off'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton googleSignInBtn type="button" onClick={signInWithGoogle} >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
