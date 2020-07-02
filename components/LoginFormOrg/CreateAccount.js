import React, {Component} from 'react';
import {Button} from 'react-native';

export default class CreateAccountButton extends Component {
  render() {
    return (
      <Button
        color={'#8D7EF2'}
        title={'CREAR CUENTA'}
        onPress={() => this.props.navigation.navigate('SignInOrg')}
      />
    );
  }
}
