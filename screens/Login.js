import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LoginTM from './../components/LoginTM';
import LoginForm from './../components/LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <ScrollView style={styles.Login}>
        <View>
          <LoginTM />
        </View>
        <LoginForm navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Login: {
    paddingTop: '10%',
    backgroundColor: 'white',
  },
});

