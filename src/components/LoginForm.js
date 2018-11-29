import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import Card from './Card';
import CardSection from './CardSection';
import InputComponent from './InputComponent';
import Button from './Button';

export default class LoginForm extends Component<{}> {
  state = { email: '', password: '', error: '' };

  submit() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password).catch((err) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        alert(err);
        this.setState({ error: 'Authentication Failed!' });
      })
    });
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

        <Text style={ styles.error }>{ this.state.error }</Text>

        <CardSection>
          <Button buttonText={'Log In'} propMethod={ this.submit.bind(this) } />
        </CardSection>

      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
})
