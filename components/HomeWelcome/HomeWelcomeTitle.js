import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const HomeWelcomeTitle = () => (
  <Text style={styles.HomeWelcomeTitle}>Bienvenida!</Text>
);

const styles = StyleSheet.create({
  HomeWelcomeTitle: {
    fontSize: 40,
    color: '#5849bf',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingRight: 10,
  },
});
