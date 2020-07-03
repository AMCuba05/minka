import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

export default function HourCargo() {
  const [selectedValue, setSelectedValue] = useState('4 Horas');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="4 Horas" value="4" />
        <Picker.Item label="6 Horas" value="6" />
        <Picker.Item label="8 Horas" value="8" />
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
