import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const HomeLogo = () => (
  <Image
    source={
      __DEV__
        ? require('./../../assets/images/minkaLogo.png')
        : require('./../../assets/images/minkaLogo.png')
    }
    style={styles.HomeLogo}
  />
);

const styles = StyleSheet.create({
  HomeLogo: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
});
