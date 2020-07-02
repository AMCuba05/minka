import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LoginLogo from './LoginLogo';
import {HomeTitle} from '../HomeTM/HomeTitle';

export default function LoginTM() {
  return (
    <View>
      <ScrollView styles={styles.LoginTM}>
        <LoginLogo />
        <HomeTitle />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginTM: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
