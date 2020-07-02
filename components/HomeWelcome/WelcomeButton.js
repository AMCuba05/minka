import React, {Component} from 'react';
import {Button, StyleSheet} from 'react-native';

class WelcomeButton extends Component {
  render() {
    const {title} = this.props;
    return (
      <Button
        title={title}
        color="#5849bf"
        style={styles.welcomeButton}
        onPress={() => this.props.navigation.navigate('Login')}
      />
    );
  }
}

const styles = StyleSheet.create({
  welcomeButton: {
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default WelcomeButton;
