import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default function LoginFormButton({navigation}) {
  return (
    <>
      <View style={styles.LoginFormButton}>
        <Button
          color={'#5849bf'}
          title={'INICIAR SESION'}
          onPress={() => navigation.navigate('OrganizationView')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  LoginFormButton: {
    fontSize: 15,
    color: 'white',
    paddingTop: 10,
  },
  LoginOrg: {
    fontSize: 15,
    color: '#8d7ef2',
    paddingTop: 10,
  },
});
