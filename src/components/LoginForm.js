import React, { Component } from 'react';
import { View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import InputComponent from './InputComponent';
import Button from './Button';

export default class LoginForm extends Component<{}> {
  state = { text: '' };
  render() {
    return(
      <Card>
        <CardSection>
          <InputComponent label={ 'email' } value={ this.state.text } onChangeTextText={ text => this.setState({text}) } />
        </CardSection>

        <CardSection>
          <Button buttonText={'Log In'} propMethod={ console.log('here') } />
        </CardSection>
      </Card>
    );
  }
}
