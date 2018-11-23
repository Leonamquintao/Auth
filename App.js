import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

//Components
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<Props> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPPseB6m_XVD-G6kGssf69bbdbC7wXIW8',
      authDomain: 'auth-react-123.firebaseapp.com',
      databaseURL: 'https://auth-react-123.firebaseio.com',
      projectId: 'auth-react-123',
      storageBucket: 'auth-react-123.appspot.com',
      messagingSenderId: '436398464697'
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Auth'} />
        <LoginForm />
      </View>
    );
  }
}
