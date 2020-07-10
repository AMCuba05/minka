import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import ExperiencePicker from './../components/Pickers/ExperiencePicker';
import HourCargo from './../components/Pickers/HourCargo';
import Zone from './../components/Pickers/Zone';
import Field from './../components/Pickers/Field';
import DatePicker from './../components/Pickers/DatePicker';
import TimePicker from './../components/Pickers/TimePicker';

export default class OfferJob extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Ofrecer Trabajo</Text>
        <View style={styles.card}>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Nombre Organizacion</Text>
            <TextInput style={styles.textInput} placeholder={'Nombre'} />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Descripcion Oferta</Text>
            <TextInput style={styles.textInput} placeholder={'Descripcion'} />
          </View>
          <View>
            <Text style={styles.textForm}>Rubro</Text>
            <Field />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Ubicacion</Text>
            <Zone />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Carga Horaria</Text>
            <HourCargo />
          </View>
          <View>
            <Text style={styles.textForm}>Rango de Pago</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Monto en Bs'}
              keyboardType={'numeric'}
            />
          </View>
          <View>
            <Text style={styles.textForm}>Experiencia</Text>
            <ExperiencePicker />
          </View>
          <View>
            <Text style={styles.textForm}>Fecha de Entrevista</Text>
            <DatePicker />
          </View>
          <View>
            <Text style={styles.textForm}>Hora Entrevista</Text>
            <TimePicker />
          </View>
          <View style={styles.button}>
            <Button color={'#8d7ef2'} title={'Aceptar'} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  offerjob: {
    width: 293,
    height: 219,
  },
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
    paddingTop: 10,
    paddingRight: 20,
    width: 120,
    height: 60,
  },
});
