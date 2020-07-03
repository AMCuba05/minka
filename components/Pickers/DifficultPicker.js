import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

export default function DiffucultPicker() {
  const [selectedValue, setSelectedValue] = useState('Basico');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Basico" value="0" />
        <Picker.Item label="Intermedio" value="1" />
        <Picker.Item label="Avanzado" value="2" />
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
