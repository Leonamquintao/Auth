import React, { Component } from 'react';
import { View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';

export default class LoginForm extends Component<{}> {
  state = { text: '' };
  render() {
    return(
      <Card>
        <CardSection>
          <Input value={ this.state.text }
            onChangeTextText={ text => this.setState({text}) } />
        </CardSection>

        <CardSection />
          <CardSection>
            <Button buttonText={'Log In'} propMethod={ console.log('here') } />
          </CardSection>
      </Card>
    );
  }
}
