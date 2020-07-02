import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const HomeText = () => (
  <Text style={styles.HomeText}>
    Te ofrecemos trabajos seguros y acceso a capacitaciones gratuitas
  </Text>
);

const styles = StyleSheet.create({
  HomeText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
});
