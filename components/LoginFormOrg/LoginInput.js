import React, {Component} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

export default class LoginInput extends Component {
  render() {
    return (
      <>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            placeholder={'Correo Electronico'}
          />
        </View>
        <View>
          <TextInput style={styles.TextInputUser} placeholder={'Contraseña'} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  TextInputUser: {
    width: 270,
    height: 44,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#bce0fd',
    alignSelf: 'center',
    color: '#2c3d60',
  },
  Container: {
    paddingVertical: 10,
  },
});
