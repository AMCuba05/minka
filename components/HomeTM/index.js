import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HomeLogo} from './HomeLogo';
import {HomeTitle} from './HomeTitle';

export const HomeTM = () => (
  <View style={styles.HomeTM}>
    <HomeTitle />
    <HomeLogo />
  </View>
);

const styles = StyleSheet.create({
  HomeTM: {
    paddingTop: 10,
    justifyContent: 'center',
  },
});
