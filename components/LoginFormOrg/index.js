import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CreateAccountButton from './CreateAccount';
import LoginInput from './LoginInput';
import LoginFormButton from './LoginFormButton';

export default function LoginForm({navigation}) {
  return (
    <ScrollView style={styles.LoginForm}>
      <View>
        <LoginInput />
      </View>
      <View>
        <LoginFormButton navigation={navigation} />
      </View>
      <View style={styles.CreateAccountButton}>
        <CreateAccountButton navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  LoginForm: {
    paddingHorizontal: 60,
  },
  LoginInput: {
    paddingVertical: 20,
  },
  CreateAccountButton: {
    paddingVertical: 10,
  },
});
