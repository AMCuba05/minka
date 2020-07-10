/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Button, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ProfileOrg({interviewDate}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    interviewDate = currentDate;
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={showDatepicker}>
          <Text
            style={{
              width: 270,
              height: 30,
              borderStyle: 'solid',
              borderWidth: 1,
              borderBottomColor: 'black',
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              textAlign: 'left',
              fontSize: 16,
            }}>
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
