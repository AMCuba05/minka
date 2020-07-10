import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Picker,
} from 'react-native';
import DatePicker from './../components/Pickers/DatePicker';
import DifficultPicker from './../components/Pickers/DifficultPicker';
import axios from 'axios';
export default class OfferCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationName: '',
      courseName: '',
      rubro: 'reposteria',
      description: '',
      difficulty: '4',
      startDate: new Date(),
      quota: '',
    };
  }

  validation() {
    const blanckspaces =
      this.state.organizationName === '' ||
      this.state.courseName === '' ||
      this.state.rubro === '' ||
      this.state.description === '' ||
      this.state.difficulty === '' ||
      this.state.quota === '';
    if (!blanckspaces) {
      axios
        .post('https://api-minka.herokuapp.com/course', {
          organizationName: this.state.organizationName,
          courseName: this.state.courseName,
          field: this.state.rubro,
          startDate: this.state.startDate.toJSON(),
          description: this.state.description,
          difficulty: this.state.difficulty,
          quota: Number(this.state.quota),
        })
        .then(function(response) {
          console.log(response.data);
          Alert.alert('Curso publicado correctamente');
        })
        .catch(function(error) {
          console.log(error);
          Alert.alert('Ha ocurrido un error');
        });
    } else {
      Alert.alert('Se deben rellenar todos los campos');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ofrecer Curso</Text>
        <View style={styles.card}>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Nombre Organizacion</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Nombre'}
              onChangeText={text => this.setState({organizationName: text})}
            />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Nombre Curso</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Nombre'}
              onChangeText={text => this.setState({courseName: text})}
            />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Descripcion Curso</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Descripcion'}
              onChangeText={text => this.setState({description: text})}
            />
          </View>
          <View>
            <Text style={styles.textForm}>Rubro</Text>
            <View style={styles.containerP}>
              <Picker
                selectedValue={this.state.rubro}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                  if (itemValue !== 'other') {
                    return this.setState({rubro: itemValue});
                  }
                }}>
                <Picker.Item label="Reposteria" value="reposteria" />
                <Picker.Item label="Manualidades" value="manualidades" />
                <Picker.Item
                  label="Corte y Confeccion"
                  value="corte_confeccion"
                />
                <Picker.Item label="Peluqueria" value="peluqueria" />
                <Picker.Item
                  label="Asistente de Ventas"
                  value="asistente_ventas"
                />
                <Picker.Item label="Otro" value="other" />
              </Picker>
              {this.state.rubro === 'other' ? (
                <TextInput
                  style={styles.textInputp}
                  placeholder={'Otro'}
                  onChangeText={text => (this.setState.rubro = text)}
                />
              ) : null}
            </View>
          </View>
          <View>
            <Text style={styles.textForm}>Cupos</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Cupos'}
              keyboardType={'numeric'}
              onChangeText={text => this.setState({quota: text})}
            />
          </View>
          <View>
            <Text style={styles.textForm}>Dificultad</Text>
            <DifficultPicker dificult={this.state.difficulty} />
          </View>
          <View>
            <Text style={styles.textForm}>Fecha de Inicio</Text>
            <DatePicker interviewDate={this.state.startDate} />
          </View>
          <View style={styles.button}>
            <Button
              color={'#8d7ef2'}
              title={'Aceptar'}
              onPress={() => this.validation()}
            />
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
  containerP: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  picker: {
    width: 270,
    height: 40,
  },
  textInputp: {
    width: 270,
    height: 40,
  },
});
