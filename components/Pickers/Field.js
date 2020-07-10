import React, {useState} from 'react';
import {View, Picker, StyleSheet, TextInput} from 'react-native';

export default function Field({rubro}) {
  const [selectedValue, setSelectedValue] = useState('Reposteria');
  let r = rubro;
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          r = selectedValue;
          setSelectedValue(itemValue);
        }}>
        <Picker.Item label="Reposteria" value="reposteria" />
        <Picker.Item label="Manualidades" value="manualidades" />
        <Picker.Item label="Corte y Confeccion" value="corte_confeccion" />
        <Picker.Item label="Peluqueria" value="peluqueria" />
        <Picker.Item label="Asistente de Ventas" value="asistente_ventas" />
        <Picker.Item label="Otro" value="other" />
      </Picker>
      {selectedValue === 'other' ? (
        <TextInput
          style={styles.textInput}
          placeholder={'Otro'}
          onChangeText={setSelectedValue}
        />
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
