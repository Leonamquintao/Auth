import React, { Component } from 'react';
import { View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import InputComponent from './InputComponent';
import Button from './Button';

export default class LoginForm extends Component<{}> {
  state = { email: '' };
  render() {
    return(
      <Card>
        <CardSection>
          <InputComponent label={ 'Email:' } placeholder={ 'enter valid email' }
            value={ this.state.text } onChangeTextText={ email => this.setState({ email }) } />
        </CardSection>

        <CardSection>
          <Button buttonText={'Log In'} propMethod={ console.log('state => ', this.state) } />
        </CardSection>
      </Card>
    );
  }
}
