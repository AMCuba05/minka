import React from 'react';
import {View, Text} from 'react-native';

import TrainingPost from '../components/TrainingCourses/trainingPosts';

export default class SectionTraining extends React.Component{
  render() {
    return (
      <View>
        <TrainingPost

          navigation = {this.props.navigation}
        />
      </View>
    );
  }
}

