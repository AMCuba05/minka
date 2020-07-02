import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SignInInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Al registrar una cuenta, aceptas nuestros Terminos de Servicio y
        Politicas de Privacidad
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#5849bf',
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 50,
    fontSize: 12,
  },
});
