import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileInfo from './../components/Profile/profileInfo';
import ProfileCalification from './../components/Profile/profileCalification';
export default class ProfileUsr extends Component {
  render() {
    return (
      <View style={styles.body}>
        <ProfileInfo/>
        <ProfileCalification/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#FFF',
  }
})
