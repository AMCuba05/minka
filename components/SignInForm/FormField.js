import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default class FormField extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}> Crea una cuenta</Text>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            placeholder={'Nombre Organizacion'}
          />
        </View>
        <View style={styles.Container}>
          <TextInput style={styles.TextInputUser} placeholder={'Correo'} />
        </View>
        <View style={styles.Container}>
          <TextInput style={styles.TextInputUser} placeholder={'NIT Empresa'} />
        </View>
        <View style={styles.Container}>
          <TextInput style={styles.TextInputUser} placeholder={'Contraseña'} />
        </View>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            placeholder={'Confirmar Contraseña'}
          />
        </View>
        <View style={styles.button}>
          <Button color={'#8d7ef2'} title={'REGISTRARSE'} />
        </View>
      </View>
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
  title: {
    fontSize: 20,
    color: '#5849bf',
    lineHeight: 24,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  button: {
    paddingTop: 30,
    alignItems: 'center',
  },
  card: {
    width: 327,
    height: 443,
    borderRadius: 15,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingTop: 20,
  },
});
