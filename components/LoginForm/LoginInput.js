import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Button, Alert} from 'react-native';
import axios from 'axios';

export default class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  validate() {
    axios
      .post('https://api-minka.herokuapp.com/user/signin', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function(response) {
        console.log(response);
        Alert.alert('login completados');
        this.props.navigation.navigate('UserView');
      })
      .catch(function(error) {
        Alert.alert('Error');
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <View style={styles.Container}>
          <TextInput
            style={styles.TextInputUser}
            placeholder={'Correo Electronico'}
            onChangeText={text => this.setState({email: text})}
          />
        </View>
        <View>
          <TextInput
            secureTextEntry={true}
            style={styles.TextInputUser}
            placeholder={'Contraseña'}
            onChangeText={text => this.setState({password: text})}
          />
        </View>
        <View style={styles.LoginFormButton}>
          <Button
            color={'#5849bf'}
            title={'INICIAR SESION'}
            onPress={() => this.props.navigation.navigate('UserView')}
          />
        </View>
        <View style={styles.LoginOrg}>
          <Button
            color={'#8D7EF2'}
            title={'Acceder como organizacion'}
            onPress={() => this.props.navigation.navigate('LoginOrg')}
          />
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
  LoginFormButton: {
    fontSize: 15,
    color: 'white',
    paddingTop: 10,
  },
  LoginOrg: {
    fontSize: 15,
    color: '#8d7ef2',
    paddingTop: 10,
  },
});
