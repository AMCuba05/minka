import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './../screens/Home';
import Login from './../screens/Login';
import LoginOrg from './../screens/LoginOrg';
import SignInOrg from './../screens/SignInOrg';
import OrganizationView from './../screens/OrganizationView';
import {HomeTitle} from '../components/HomeTM/HomeTitle';
import TabNavigatorOrg from './tabNavOrg';
import SignInUsr from './../screens/SignInUsr'
import TabNavigatorUsr from './../navigation_services/tabNavUsr';
import SectionTrainingInfo from './../screens/SectionTrainingInfo';
import OffersInfo from './../screens/OffersInfo';

TabNavigatorOrg.navigationOptions = {
  headerTitle: () => <HomeTitle />,
  headerLeft: null,
};

OffersInfo.navigationOptions = {
  title: 'minka',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle:{
      
      color: '#5849bf',
      fontSize: 26,
      textAlign: 'center',
    }
}

SectionTrainingInfo.navigationOptions = {
    title: 'minka',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle:{
      
      color: '#5849bf',
      fontSize: 26,
      textAlign: 'center',
    }
}

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

SignInUsr.navigationOptions = {
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
    SignInUsr: SignInUsr,
    OrganizationView: TabNavigatorOrg,
    UserView: TabNavigatorUsr,
    LoginOrg: LoginOrg,
    CourseInfo: SectionTrainingInfo,
    OfferInfo: OffersInfo,
    
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
