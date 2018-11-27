import React, { Component } from 'react';
import { View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import InputComponent from './InputComponent';
import Button from './Button';

export default class LoginForm extends Component<{}> {
  state = { email: '', password: '' };

  submit() {
    console.log('state ', this.state)
  }

  render() {
    return(
      <Card>

        <CardSection>
          <InputComponent label={ 'Email:' } placeholder={ 'enter valid email' }
            value={ this.state.email }
            onChange={ (email) => this.setState({ email }) } />
        </CardSection>

        <CardSection>
          <InputComponent label={ 'Password:' } placeholder={ 'password' }
            value={ this.state.password } secureTextEntry
            onChange={ (password) => this.setState({ password }) } />
        </CardSection>

        <CardSection>
          <Button buttonText={'Log In'} propMethod={ this.submit.bind(this) } />
        </CardSection>

      </Card>
    );
  }
}
