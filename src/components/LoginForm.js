import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class LoginForm extends Component<{}> {
  state = { text: '' };
  render() {
    return(
      <Card>
        <CardSection>
          <TextInput value={ this.state.text }
            onChangeTextText={ text => this.setState({text}) }
            style={{ height: 20, width: 100 }}/>
        </CardSection>

        <CardSection />
          <CardSection>
            <Button buttonText={'Log In'} propMethod={ console.log('here') } />
          </CardSection>
      </Card>
    );
  }
}
