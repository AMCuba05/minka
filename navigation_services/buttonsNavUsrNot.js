import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeTitle} from '../components/HomeTM/HomeTitle';
import NotificationsUsr from './../screens/NotificationsUsr';

import OffersInfo from './../screens/OffersInfo';
import SectionTrainingInfo from './../screens/SectionTrainingInfo';
import NotificationTitle from './../components/NotificationView/notificationTitle';

NotificationsUsr.navigationOptions = {
  headerTitle: () => <NotificationTitle />,
};
const buttonsNavUserNot = createStackNavigator(
  {
    NotificationsUsr: NotificationsUsr,

    OfferInfo: OffersInfo,
    CourseInfo: SectionTrainingInfo,
  },
  {
    initialRouteName: 'NotificationsUsr',
  },
);

export default createAppContainer(buttonsNavUserNot);
