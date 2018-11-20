import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Auth'} />
      </View>
    );
  }
}
