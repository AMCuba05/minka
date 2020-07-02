import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LoginTM from './../components/LoginTM';
import LoginForm from './../components/LoginFormOrg';

export default function Login({navigation}) {
  return (
    <ScrollView style={styles.Login}>
      <View>
        <LoginTM />
      </View>
      <LoginForm navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Login: {
    paddingTop: '10%',
    backgroundColor: 'white',
  },
});
