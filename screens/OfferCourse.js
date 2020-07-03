import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import DatePicker from './../components/Pickers/DatePicker';
import DifficultPicker from './../components/Pickers/DifficultPicker';
import Field from './../components/Pickers/Field';
export default class OfferCourse extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ofrecer Curso</Text>
        <View style={styles.card}>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Nombre Organizacion</Text>
            <TextInput style={styles.textInput} placeholder={'Nombre'} />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Nombre Curso</Text>
            <TextInput style={styles.textInput} placeholder={'Nombre'} />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Descripcion Curso</Text>
            <TextInput style={styles.textInput} placeholder={'Descripcion'} />
          </View>
          <View>
            <Text style={styles.textForm}>Rubro</Text>
            <Field />
          </View>
          <View>
            <Text style={styles.textForm}>Dificultad</Text>
            <DifficultPicker />
          </View>
          <View>
            <Text style={styles.textForm}>Fecha de Inicio</Text>
            <DatePicker />
          </View>
          <View style={styles.button}>
            <Button color={'#8d7ef2'} title={'Aceptar'} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',

    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  text: {
    fontSize: 30,
    color: '#8d7ef2',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 30,
    paddingVertical: 10,
  },
  textForm: {
    fontSize: 16,
    color: '#8d7ef2',
    textAlign: 'left',
    paddingVertical: 10,
  },
  textInput: {
    width: 270,
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: 'black',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  button: {
    paddingTop: 15,
    paddingRight: 20,
    width: 120,
    height: 30,
  },
});
