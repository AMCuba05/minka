import React from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from './../../assets/images/minkaLogo.png';

export default function LoginLogo() {
  return <Image source={logo} style={styles.LoginLogo} />;
}

const styles = StyleSheet.create({
  LoginLogo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
});
