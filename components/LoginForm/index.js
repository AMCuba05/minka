import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import CreateAccountButton from './CreateAccount';
import axios from 'axios';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  goUser() {
    this.props.navigation.navigate('UserView');
  }

  validate(navigation) {
    axios
      .post('https://api-minka.herokuapp.com/user/signin', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function(response) {
        console.log(response.status);
        navigation.navigate('UserView');
      })
      .catch(function(error) {
        Alert.alert('Error');
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView style={styles.LoginForm}>
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
        <View style={styles.LoginOrg}>
          <Button
            color={'#8D7EF2'}
            title={'Acceder como organizacion'}
            onPress={() => this.props.navigation.navigate('LoginOrg')}
          />
        </View>
        <View style={styles.CreateAccountButton}>
          <CreateAccountButton navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
  }
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
