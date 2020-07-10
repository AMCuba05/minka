import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const HomeTitle = () => <Text style={styles.HomeTitle}>minka</Text>;

const styles = StyleSheet.create({
  HomeTitle: {
    fontSize: 50,
    fontFamily: 'Poppins',
    color: '#5849bf',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 10,
    letterSpacing: -0.89,
  },
});
