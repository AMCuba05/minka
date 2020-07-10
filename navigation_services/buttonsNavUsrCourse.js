import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeTitle} from '../components/HomeTM/HomeTitle';
import OffersInfo from './../screens/OffersInfo';
import SectionTrainingInfo from './../screens/SectionTrainingInfo';
import SectionTraining from '../screens/SectionTraining';
import CourseTitle from '../components/TrainingCourses/coursesTitle';
import CourseTitleBtn from '../components/TrainingCourses/courseTitleBtn';
  
SectionTraining.navigationOptions = {
    headerTitle: () => <CourseTitle/>,
    
}

SectionTrainingInfo.navigationOptions = {
    headerTitle: () => <HomeTitle />,
    
  }

const buttonsNavUserCourse = createStackNavigator(
    {
        
        SectionTraining: SectionTraining,
        OfferInfo: OffersInfo,
        CourseInfo: SectionTrainingInfo,
    },
    {
      initialRouteName: 'SectionTraining',
    },
  );
  
  export default createAppContainer(buttonsNavUserCourse);