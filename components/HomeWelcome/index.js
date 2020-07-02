import React from 'react';
import {View, StyleSheet} from 'react-native';
import WelcomeButton from './WelcomeButton';
import {HomeText} from './HomeText';
import {HomeWelcomeTitle} from './HomeWelcomeTitle';

export const HomeWelcome = ({navigation}) => (
  <View style={styles.HomeWelcome}>
    <WelcomeButton title={'INICIAR'} navigation={navigation} />
    <HomeWelcomeTitle />
    <HomeText />
  </View>
);

const styles = StyleSheet.create({
  HomeWelcome: {
    marginHorizontal: 50,
  },
});
