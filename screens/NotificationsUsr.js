import React, { useState} from 'react';
import { View, Text, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';

import NotificationBtn from './../components/NotificationView/NotificationBtn';
export default class NotificationsUsr extends React.Component {

  
  render() {
    
    return (
      <ScrollView style={styles.body}>
          <NotificationBtn
            navigation = {this.props.navigation}
          />
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFF',
  }
})
