import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NotificationsOrg from './../screens/NotificationsOrg';
import {HomeTitle} from '../components/HomeTM/HomeTitle';
import ViewNotification from './../screens/ViewNotification';

ViewNotification.navigationOptions = {
  headerTitle: () => <HomeTitle />,
  headerLeft: null,
};

NotificationsOrg.navigationOptions = {
  headerTitle: () => <HomeTitle />,
  headerLeft: null,
};

const NotificationsNavOrg = createStackNavigator(
  {
    Notifications: NotificationsOrg,
    ViewNotification: ViewNotification,
  },
  {
    initialRouteName: 'Notifications',
  },
);

export default createAppContainer(NotificationsNavOrg);
