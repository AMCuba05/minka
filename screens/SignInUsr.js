import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {HomeTitle} from './../components/HomeTM/HomeTitle';
import FormFieldUsr from './../components/SignInForm/FormFieldUsr';
import SignInInfo from './../components/SignInForm/SignInInfo';

export default class SignInUsr extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeTitle />
        <FormFieldUsr />
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
