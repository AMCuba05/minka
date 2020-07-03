import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

export default function HourCargo() {
  const [selectedValue, setSelectedValue] = useState('Cercado');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Cercado Zona Norte" value="0" />
        <Picker.Item label="Cercado Zona Sur" value="1" />
        <Picker.Item label="Quillacollo" value="2" />
        <Picker.Item label="Sacaba" value="3" />
        <Picker.Item label="Vinto" value="4" />
        <Picker.Item label="Colomi" value="5" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  picker: {
    width: 270,
    height: 40,
  },
});
