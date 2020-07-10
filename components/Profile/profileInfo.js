import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

let IconComponent = Icon;

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.id = props.navigation.getParam('itemID');
    this.state = {
      nombre: 'Adrian Cuba',
      email: 'adrian0512@gmail.com',
      nit: 13163239,
      descripcion: 'Ingeniero de software en JALA',
    };
  }

  componentDidMount() {
    axios
      .get('https://api-minka.herokuapp.com/user/' + this.id)
      .then(response => {
        this.setState({
          nombre: response.data.name,
          email: response.data.email,
          ci: response.data.ci,
          descripcion: response.data.description,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.bodyInfo}>
        <View style={styles.flexBoxInfo}>
          <View style={styles.iconBox}>
            <IconComponent name={'street-view'} size={100} color={'#8d7ef2'} />
          </View>
          <View>
            <Text style={styles.titleInfoBox}>Informacion de Contacto</Text>
            <Text style={styles.textTitleInfo}>Email:</Text>
            <Text style={styles.textInfo}>{this.state.email}</Text>
            <Text style={styles.textTitleInfo}>CI: </Text>
            <Text style={styles.textInfo}>{this.state.ci} </Text>
          </View>
        </View>
        <View>
          <Text style={styles.nameBox}> {this.state.nombre} </Text>
          <Text style={styles.descripcionBox}>{this.state.descripcion}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyInfo: {
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 10,
    paddingBottom: 15,
    borderBottomColor: '#8d7ef2',
    borderBottomWidth: 2,
  },
  flexBoxInfo: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  iconBox: {
    marginRight: 20,
  },
  titleInfoBox: {
    color: '#5849bf',
    fontSize: 17,
    marginBottom: 10,
  },
  textTitleInfo: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textInfo: {
    fontSize: 14,
    marginLeft: 20,
  },
  nameBox: {
    fontSize: 20,
  },
  descripcionBox: {
    fontSize: 15,
    marginLeft: 5,
  },
});

export default ProfileInfo;
