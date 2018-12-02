import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class HomePage extends Component <{}> {

  logOut() {
    firebase.auth().signOut().then(() => {
      this.setState({ loggedIn: false });
    })
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Text style={ styles.headerText }>This is just a dummy Home Page...</Text>
        </CardSection>
        <CardSection>
          <Button buttonText={'Log Out'} propMethod={ this.logOut.bind(this) } />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
  }
})
