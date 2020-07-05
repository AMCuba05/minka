import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class NotificationsOrg extends Component {
  render() {
    return (
      <View>
        <Text>Notification</Text>
        <Button
          title={'view'}
          onPress={() => this.props.navigation.navigate('ViewNotification')}
        />
      </View>
    );
  }
}
