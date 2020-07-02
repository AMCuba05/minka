import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './../screens/Home';
import Login from './../screens/Login';
import LoginOrg from './../screens/LoginOrg';
import SignInOrg from './../screens/SignInOrg';
import OrganizationView from './../screens/OrganizationView';
import {HomeTitle} from '../components/HomeTM/HomeTitle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabNavigatorOrg from './tabNavOrg';

Login.navigationOptions = {
  title: 'Iniciar Sesion',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#5849bf',
    textAlign: 'center',
  },
  headerLeft: null,
};

LoginOrg.navigationOptions = {
  title: 'Iniciar Sesion',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#5849bf',
    textAlign: 'center',
  },
  headerLeft: null,
};

OrganizationView.navigationOptions = {
  headerTitle: () => <HomeTitle />,
  headerLeft: null,
};

SignInOrg.navigationOptions = {
  title: 'Crear Cuenta',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#5849bf',
    textAlign: 'center',
  },
  headerLeft: null,
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: {
      screen: Login,
    },
    SignInOrg: SignInOrg,
    OrganizationView: TabNavigatorOrg,
    LoginOrg: LoginOrg,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
