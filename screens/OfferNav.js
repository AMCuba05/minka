import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Offers from './Offers';
import SectionTraining from './SectionTraining';

Offers.navigationOptions = {
    title: 'Offers',
}

const OfferNav = createStackNavigator(
    {
      Chuleta: Offers,
      Training: SectionTraining,
    },
    {
      initialRouteName: 'Chuleta',
      
    },
  );
  
  export default createAppContainer(OfferNav);
