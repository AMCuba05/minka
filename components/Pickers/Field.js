import React, {useState} from 'react';
import {View, Picker, StyleSheet, TextInput} from 'react-native';

export default function HourCargo() {
  const [selectedValue, setSelectedValue] = useState('Reposteria');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Reposteria" value="0" />
        <Picker.Item label="Manualidades" value="1" />
        <Picker.Item label="Corte y Confeccion" value="2" />
        <Picker.Item label="Peluqueria" value="3" />
        <Picker.Item label="Asistente de Ventas" value="4" />
        <Picker.Item label="Otro" value="5" />
      </Picker>
      {selectedValue === '5' ? (
        <TextInput style={styles.textInput} placeholder={'Otro'} />
      ) : null}
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
  textInput: {
    width: 270,
    height: 40,
  },
});
