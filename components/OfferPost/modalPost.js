import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Picker,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Zone from '../Pickers/Zone';
import axios from 'axios';
const ModalPost = ({modalVisible, setModalVisible, setOfferJob}) => {
  const [checked, setChecked] = React.useState('all');
  const [guardar, setGuardar] = React.useState('');

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Categorias</Text>
          <View style={styles.flexModal}>
            <RadioButton
              value="all"
              status={checked === 'all' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('all')}
            />
            <Text style={styles.flexModalText}>All</Text>
          </View>

          <View style={styles.flexModal}>
            <RadioButton
              value="reposteria"
              status={checked === 'reposteria' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('reposteria')}
            />
            <Text style={styles.flexModalText}>Reposteria</Text>
          </View>

          <View style={styles.flexModal}>
            <RadioButton
              value="corte_confeccion"
              status={checked === 'corte_confeccion' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('corte_confeccion')}
            />
            <Text style={styles.flexModalText}>Corte y confeccion</Text>
          </View>

          <View style={styles.flexModal}>
            <RadioButton
              value="peluqueria"
              status={checked === 'peluqueria' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('peluqueria')}
            />
            <Text style={styles.flexModalText}>Peluqueria</Text>
          </View>
          <View>
            <Text style={styles.modalText}>Ubicacion/Zona</Text>
            <Zone />
          </View>
          <TouchableHighlight
            style={styles.openButton}
            underlayColor="rgba(141,126,242,0.6)"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Filtrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'relative',
    marginTop: 90,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#8d7ef2',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
    width: 100,
    alignSelf: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    color: '#5849bf',
    fontSize: 17,
  },
  flexModal: {
    flexDirection: 'row',
  },
  flexModalText: {
    lineHeight: 33,
    fontSize: 15,
  },
});

export default ModalPost;
