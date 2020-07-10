import React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import CourseTitleBtn from '../components/TrainingCourses/courseTitleBtn';
import TrainingPost from '../components/TrainingCourses/trainingPosts';

export default class SectionTraining extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.body}>

          <CourseTitleBtn />
        </View>

        <TrainingPost

          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFF',
  }
})

