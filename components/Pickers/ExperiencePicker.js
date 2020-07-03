import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

export default function NotificationsOrg() {
  const [selectedValue, setSelectedValue] = useState('Sin Experiencia');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Sin Experiencia" value="0" />
        <Picker.Item label="Experiencia Media" value="1" />
        <Picker.Item label="Experimentado" value="2" />
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
