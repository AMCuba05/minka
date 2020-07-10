import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import axios from 'axios';

class ProfileCalification extends Component {
  constructor(props) {
    super(props);
    this.id = props.navigation.getParam('itemID');
    this.state = {
      valoration: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://api-minka.herokuapp.com/user/' + this.id)
      .then(response => {
        this.setState({
          valoration: response.data.valuation,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.boxCalification}>
        <Text style={styles.title}>Valoracion</Text>
        <View style={styles.flexBox}>
          <View>
            <ProgressCircle
              percent={this.state.valoration * 10}
              radius={60}
              borderWidth={8}
              color="rgb(141,126,242)"
              shadowColor="rgba(141,126,242,0.1)"
              bgColor="#fff">
              <Text style={{fontSize: 18}}>
                {`${this.state.valoration * 10}%`}
              </Text>
            </ProgressCircle>
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textCalification}>
              {`Calificaciones en Entrevistas: ${this.state.valoration * 10}%`}
            </Text>
          </View>
        </View>
        <View style={styles.flexBox}>
          <View>
            <ProgressCircle
              percent={this.state.valoration * 10}
              radius={60}
              borderWidth={8}
              color="rgb(141,126,242)"
              shadowColor="rgba(141,126,242,0.1)"
              bgColor="#fff">
              <Text style={{fontSize: 18}}>
                {`${this.state.valoration * 10}%`}
              </Text>
            </ProgressCircle>
          </View>
          <View style={styles.boxText}>
            <Text style={styles.textCalification}>
              {`Calificaciones en Cursos: ${this.state.valoration * 10}%`}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxCalification: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  flexBox: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    color: '#5849bf',
    fontSize: 20,
    marginBottom: 10,
  },
  boxText: {
    justifyContent: 'center',
    marginHorizontal: 10,
    alignContent: 'center',
  },
  textCalification: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileCalification;
