import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import Card from './Card';
import CardSection from './CardSection';
import InputComponent from './InputComponent';
import Button from './Button';
import Spinner from './SpinnerComponent';

export default class LoginForm extends Component<{}> {
  state = { email: '', password: '', error: '', loading: false };

  submit() {

    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.loginSuccess.bind(this))
    .catch((err) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.loginSuccess.bind(this))
      .catch(this.loginFail.bind(this))
    });
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size='small' />
    }

    return(
      <Button buttonText={'Log In'} propMethod={ this.submit.bind(this) } />
    );
  }

  loginSuccess() {
    this.setState({ email: '', password: '', loading: false, error: '' });
  }

  loginFail() {
    this.setState({ error: 'Authentication Failed!', loading: false });
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
          { this.renderButton() }
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
