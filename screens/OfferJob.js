/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Picker,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TimePicker from './../components/Pickers/TimePicker';
import DatePicker from './../components/Pickers/DatePicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

export default class OfferJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizationName: '',
      field: 'reposteria',
      description: '',
      location: 'cercado_zona_norte',
      workload: '4',
      payRange: '',
      interviewDate: null,
      quota: '',
      hour: '',
    };
  }

  validation(id) {
    const blanckspaces =
      this.state.organizationName === '' ||
      this.state.field === '' ||
      this.state.description === '' ||
      this.state.location === '' ||
      this.state.workload === '' ||
      this.state.quota === '';
    if (!blanckspaces) {
      axios
        .post('https://api-minka.herokuapp.com/job', {
          organizationName: this.state.organizationName,
          field: this.state.field,
          description: this.state.description,
          location: this.state.location,
          workload: Number(this.state.workload),
          payRange: Number(this.state.payRange),
          quota: Number(this.state.quota),
        })
        .then(function(response) {
          const newJob = response.data._id;
          axios
            .get('https://api-minka.herokuapp.com/organization/' + id)
            .then(function(responseGet) {
              const jobs = responseGet.data.jobs;
              axios
                .put('https://api-minka.herokuapp.com/organization/' + id, {
                  jobs: [
                    ...jobs,
                    {
                      _id: newJob,
                    },
                  ],
                })
                .then(r => console.log(r.status))
                .catch(e => console.log(e));
              Alert.alert('Trabajo publicado correctamente');
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(function(error) {
          console.log(error);
          Alert.alert('Ha ocurrido un error');
        });
    } else {
      Alert.alert('Se deben rellenar todos los campos');
    }
  }

  addJob(jobs, newJob) {
    axios
      .put('https://api-minka.herokuapp.com/jobs', {
        jobs: [
          ...jobs,
          {
            _id: newJob,
          },
        ],
      })
      .then(r => console.log(r.status))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Ofrecer Trabajo</Text>
        <View style={styles.card}>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Nombre Organizacion</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Nombre Organizacion'}
              onChangeText={text => this.setState({organizationName: text})}
            />
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Descripcion Oferta</Text>
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
                selectedValue={this.state.field}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                  if (itemValue !== 'other') {
                    return this.setState({field: itemValue});
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
              {this.state.field === 'other' ? (
                <TextInput
                  style={styles.textInputP}
                  placeholder={'Otro'}
                  onChangeText={text => (this.setState.field = text)}
                />
              ) : null}
            </View>
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Ubicacion</Text>
            <View style={styles.containerP}>
              <Picker
                selectedValue={this.state.location}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({location: itemValue})
                }>
                <Picker.Item
                  label="Cercado Zona Norte"
                  value="cercado_zona_norte"
                />
                <Picker.Item
                  label="Cercado Zona Sur"
                  value="cercado_zona_sur"
                />
                <Picker.Item label="Quillacollo" value="quillacollo" />
                <Picker.Item label="Sacaba" value="sacaba" />
                <Picker.Item label="Vinto" value="vinto" />
                <Picker.Item label="Colomi" value="colomi" />
              </Picker>
            </View>
          </View>
          <View style={styles.Container}>
            <Text style={styles.textForm}>Carga Horaria</Text>
            <View style={styles.containerP}>
              <Picker
                selectedValue={this.state.workload}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({workload: itemValue})
                }>
                <Picker.Item label="4 Horas" value="4" />
                <Picker.Item label="6 Horas" value="6" />
                <Picker.Item label="8 Horas" value="8" />
              </Picker>
            </View>
          </View>
          <View>
            <Text style={styles.textForm}>Rango de Pago</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Monto en Bs'}
              keyboardType={'numeric'}
              onChangeText={text => this.setState({workload: text})}
            />
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
            <Text style={styles.textForm}>Fecha de Entrevista</Text>
            <DatePicker interviewDate={this.state.interviewDate} />
          </View>
          <View>
            <Text style={styles.textForm}>Hora Entrevista</Text>
            <TimePicker hour={this.state.hour} />
          </View>
          <View style={styles.button}>
            <Button
              color={'#8d7ef2'}
              title={'Aceptar'}
              onPress={() =>
                this.validation(this.props.navigation.getParam('itemID'))
              }
            />
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
  containerP: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  picker: {
    width: 270,
    height: 40,
  },
  textInputP: {
    width: 270,
    height: 40,
  },
});
