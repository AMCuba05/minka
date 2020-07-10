import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Button, Alert} from 'react-native';
import axios from 'axios';

export default class LoginInput extends Component {
  constructor(props) {
    super(props);
    this.OrgData = '';
    this.state = {
      email: '',
      password: '',
    };
  }

  validate(navigation) {
    axios
      .post('https://api-minka.herokuapp.com/organization/signin', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function(response) {
        navigation.navigate('OrganizationView');
        this.OrgData = response.data;
      })
      .catch(function(error) {
        Alert.alert('Error');
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
            onPress={() => this.validate(this.props.navigation)}
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
