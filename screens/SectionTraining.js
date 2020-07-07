import React, {Component} from 'react';
import {View, Text} from 'react-native';

import TrainingPost from '../components/TrainingCourses/trainingPosts';

export default class SectionTraining extends Component {
  render() {
    return (
      <View>
        <TrainingPost/>
      </View>
    );
  }
}
