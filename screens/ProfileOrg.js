import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ProfileOrg extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('itemID')}</Text>
      </View>
    );
  }
}
