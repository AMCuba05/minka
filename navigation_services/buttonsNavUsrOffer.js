import React from 'react';
import {Button, Alert} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeTitle} from '../components/HomeTM/HomeTitle';
import OffersInfo from './../screens/OffersInfo';
import SectionTrainingInfo from './../screens/SectionTrainingInfo';
import Offers from '../screens/Offers';
import OfferTitle from '../components/OfferPost/OfferTitle';
import OfferTitleBtn from '../components/OfferPost/OfferTitleBtn';
import SectionTraining from '../screens/SectionTraining';
import ModalPost from '../components/OfferPost/modalPost';
OffersInfo.navigationOptions = {
    headerTitle: () => <HomeTitle />,
    
  }
  

Offers.navigationOptions = {
    headerTitle: () => <OfferTitle/>,
    
    
    
}

const buttonsNavUserOffer = createStackNavigator(
    {
        Offers: Offers,
        SectionTraining: SectionTraining,
        OfferInfo: OffersInfo,
        CourseInfo: SectionTrainingInfo,
    },
    {
      initialRouteName: 'Offers',
    },
  );
  
  export default createAppContainer(buttonsNavUserOffer);
  