import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default class NotificationsOrg extends Component {
  constructor(props) {
    super(props);
    this.id = props.navigation.getParam('itemID');
    this.state = {
      organizationName: '',
      workload: '',
      payRange: '',
      location: '',
      date: '',
      jobs: null,
      courses: null,
      loading: true,
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://api-minka.herokuapp.com/organization/' + this.id)
      .then(response => {
        this.setState({
          jobs: response.data.jobs,
        });
        console.log(this.state.jobs.length);
        for (let i = 0; i < this.state.jobs.length; i++) {
          axios
            .get(
              'https://api-minka.herokuapp.com/job/' + this.state.jobs[i]._id,
            )
            .then(responseId => {
              let der = {
                organizationName: responseId.data.organizationName,
                field: 'Tipo: ' + responseId.data.field,
                workload: 'Salario: ' + responseId.data.workload,
                payRange: 'Carga Horaria: ' + responseId.data.payRange,
                location: 'Ubicacion: ' + responseId.data.location,
                description: responseId.data.description,
                type: 'Oferta de trabajo',
                user: [
                  {
                    name: 'Lucia Marquez',
                    contact: '77526481',
                  },
                  {
                    name: 'Francisco Gomez',
                    contact: 'Francisco@gomez.com',
                  },
                ],
              };
              let joined = this.state.items.concat(der);
              this.setState({items: joined});
              console.log(this.state.items);
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get('https://api-minka.herokuapp.com/organization/' + this.id)
      .then(response => {
        this.setState({
          courses: response.data.courses,
        });
        console.log(this.state.courses.length);
        for (let i = 0; i < this.state.courses.length; i++) {
          axios
            .get(
              'https://api-minka.herokuapp.com/course/' +
                this.state.courses[i]._id,
            )
            .then(responseId => {
              let der = {
                organizationName: responseId.data.courseName,
                field: responseId.data.field,
                workload: 'grado de dificultad: ' + responseId.data.difficulty,
                payRange: responseId.data.quota + ' cupos disponibles',
                location: responseId.data.description,
                description: responseId.data.description,
                type: 'Oferta de curso',
                user: [
                  {
                    name: 'Juan Alcides',
                    contact: '77526481',
                  },
                  {
                    name: 'Ruben Almanza',
                    contact: 'ruben@almanza.com',
                  },
                ],
              };
              let joined = this.state.items.concat(der);
              this.setState({items: joined});
              console.log(this.state.items);
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({loading: false});
      });
  }

  renderItem({index}) {
    return (
      <View key={index} style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>{this.state.items[index].type}</Text>
        </View>
        <View>
          <Text>{this.state.items[index].workload}</Text>
          <Text>{this.state.items[index].field}</Text>
          <Text>{this.state.items[index].payRange}</Text>
          <Text>{this.state.items[index].location}</Text>
        </View>
        <Button
          title={'ver'}
          onPress={() =>
            this.props.navigation.navigate('ViewNotification', {
              data: this.state.items[index].user,
            })
          }
          color={'rgb(141, 126, 242)'}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Notificaciones</Text>
        {!this.state.loading ? (
          <FlatList
            data={this.state.items}
            renderItem={({item, index}) => this.renderItem({index})}
            keyExtractor={({item, index}) => index}
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 2,
    borderColor: 'rgba(141, 126, 242,0.5)',
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(141, 126, 242,0.5)',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  text: {
    fontSize: 30,
    color: '#8d7ef2',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 30,
    paddingVertical: 10,
  },
});
