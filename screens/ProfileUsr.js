import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileInfo from './../components/Profile/profileInfo';
import ProfileCalification from './../components/Profile/profileCalification';
import HeaderPerfil from './../components/Profile/headerPerfil';
export default class ProfileUsr extends Component {
  render() {
    return (
      <View style={styles.body}>
        <HeaderPerfil />
        <ProfileInfo navigation={this.props.navigation} />
        <ProfileCalification navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFF',
  },
});
