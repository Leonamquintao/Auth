import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

export default class Input extends Component <{}> {
  render() {
    return(
      <View>
        <Text>{ this.props.labelText }</Text>
        <TextInput value={ this.props.value }
          onChangeTextText={ this.props.onChangeTextText }
          style={{ height: 20, width: 100 }}/>
      </View>
    );
  }
}
