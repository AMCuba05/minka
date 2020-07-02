import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './../screens/Home';
import Login from './../screens/Login';
import LoginOrg from './../screens/LoginOrg';
import SignInOrg from './../screens/SignInOrg';
import OrganizationView from './../screens/OrganizationView';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: {
      screen: Login,
      shownHeader: false,
    },
    SignInOrg: SignInOrg,
    OrganizationView: OrganizationView,
    LoginOrg: LoginOrg,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
