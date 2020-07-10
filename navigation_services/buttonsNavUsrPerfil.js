import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeTitle} from '../components/HomeTM/HomeTitle';
import SectionTraining from '../screens/SectionTraining';
import ProfileUsr from '../screens/ProfileUsr';
import HeaderPerfil from '../components/Profile/headerPerfil';

ProfileUsr.navigationOptions = {
  headerTitle: () => <HeaderPerfil />,
};

const buttonsNavUserPerfil = createStackNavigator(
  {
    ProfileUsr: ProfileUsr,
  },
  {
    initialRouteName: 'ProfileUsr',
  },
);

export default createAppContainer(buttonsNavUserPerfil);
