import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {HomeTitle} from './../components/HomeTM/HomeTitle';
import SignInForm from './../components/SignInForm';
import SignInInfo from './../components/SignInForm/SignInInfo';

export default class SignInOrg extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeTitle />
        <SignInForm />
        <SignInInfo />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f9ff',
    height: '100%',
  },
});
