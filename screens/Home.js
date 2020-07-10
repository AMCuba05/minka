import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeTM} from './../components/HomeTM';
import {HomeWelcome} from './../components/HomeWelcome';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.Home}>
      <HomeTM />
      <HomeWelcome navigation={navigation} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

