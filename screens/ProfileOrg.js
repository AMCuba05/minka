import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProfileInfo from './../components/ProfileOrg/profileInfo';
import ProfileCalification from './../components/ProfileOrg/profileCalification';
import HeaderPerfil from './../components/ProfileOrg/headerPerfil';
export default class ProfileOrg extends Component {
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
