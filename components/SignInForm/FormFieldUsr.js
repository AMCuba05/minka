import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import axios from 'axios';

export default class FormFieldUsr extends Component {
  constructor(props) {
    super(props);
    this.userData = '';
    this.state = {
      name: '',
      email: '',
      ci: '',
      password: '',
      confirmPassword: '',
    };
  }

  validate(navigation) {
    const blanckspaces =
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.confirmPassword === '';
    if (!blanckspaces) {
      if (this.state.password === this.state.confirmPassword) {
        axios
          .post('https://api-minka.herokuapp.com/user/signup', {
            name: this.state.name,
            email: this.state.email,
            ci: this.state.ci,
            password: this.state.password,
          })
          .then(function(response) {
            Alert.alert('Usuario Registrado Correctamente');
            navigation.navigate('Login');
            this.userData = response.data;
          })
          .catch(function(error) {
            Alert.alert('Ha ocurrido un error');
          });
      } else {
        Alert.alert('las contraseñas no coinciden');
      }
    } else {
      Alert.alert('Se deben rellenar todos los campos');
    }
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}> Crea una cuenta</Text>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            onChangeText={text => this.setState({name: text})}
            placeholder={'Nombre'}
          />
        </View>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            placeholder={'Correo o Celular'}
            onChangeText={text => this.setState({email: text})}
          />
        </View>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            placeholder={'Carnet de Identidad'}
            onChangeText={text => this.setState({ci: text})}
          />
        </View>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            secureTextEntry={true}
            placeholder={'Contraseña'}
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            placeholder={'Confirmar Contraseña'}
            secureTextEntry={true}
            onChangeText={text => this.setState({confirmPassword: text})}
          />
        </View>
        <Button
          color={'#8d7ef2'}
          title={'REGISTRARSE'}
          onPress={() => this.validate(this.props.navigation)}
        />
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
