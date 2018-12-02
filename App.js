import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

//Components
import Header from './src/components/Header';
import Spinner from './src/components/SpinnerComponent';
import LoginForm from './src/components/LoginForm';
import HomePage from './src/components/HomePage';

export default class App extends Component<Props> {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    switch(this.state.loggedIn) {
      case true:
        return <HomePage />;
      case false:
        return <LoginForm />;
      default: <Spinner size="large" />
    }

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Auth'} />
        { this.renderContent() }
      </View>
    );
  }
}
