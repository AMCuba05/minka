import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
let IconComponent = Icon;
const HeaderPerfil = () => {
  return (
    <View style={styles.flex}>
      <View>
        <IconComponent name={'user'} size={35} color={'#8d7ef2'} />
      </View>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Perfil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 3,
    padding: 8,
  },
  boxTitle: {
    justifyContent: 'center',
    marginLeft: 25,
  },
  title: {
    color: '#5849bf',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HeaderPerfil;
