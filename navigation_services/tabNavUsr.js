/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SectionTraining from './../screens/SectionTraining';
import Offers from './../screens/Offers';
import ProfileUsr from './../screens/ProfileUsr';
import NotificationsUsr from './../screens/NotificationsUsr';
import Icon from 'react-native-vector-icons/FontAwesome5';
import buttonsNavUsrCourse from './buttonsNavUsrCourse';
import buttonsNavUserOffer from './buttonsNavUsrOffer';
import buttonsNavUsrNot from './buttonsNavUsrNot';
import buttonsNavUsrPerfil from './buttonsNavUsrPerfil';

const TabNavigatorUsr = createBottomTabNavigator(
  {
    Trabajo: buttonsNavUserOffer,
    Cursos: buttonsNavUsrCourse,
    Notificaciones: buttonsNavUsrNot,
    Perfil: ProfileUsr,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      showLabel: false,
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Trabajo') {
          iconName = 'hand-holding-usd';
        } else if (routeName === 'Cursos') {
          iconName = 'hands-helping';
        } else if (routeName === 'Notificaciones') {
          iconName = 'newspaper';
        } else if (routeName === 'Perfil') {
          iconName = 'user';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={28} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#5849bf',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigatorUsr);
