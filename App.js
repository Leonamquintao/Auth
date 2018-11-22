import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID ,STORAGE_BUCKET, MESSAGING_SENDER_ID } from 'react-native-dotenv';



export default class App extends Component<Props> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: ,STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Auth'} />
      </View>
    );
  }
}
