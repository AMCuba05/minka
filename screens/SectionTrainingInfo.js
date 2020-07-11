import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class SectionTrainingInfo extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.body}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>
            {' '}
            {navigation.getParam('titulo', 'default value')}{' '}
          </Text>
        </View>
        <View style={styles.boxStyle}>
          <View style={styles.boxInfo}>
            <View style={styles.boxInfoTitle}>
              <Text style={styles.boxText}>
                Descripcion:{' '}
                {navigation.getParam('descripcion', 'default value')}{' '}
              </Text>
            </View>

            <Text style={styles.boxText}>
              Tipo: {navigation.getParam('tipo', 'default value')}{' '}
            </Text>
            <Text style={styles.boxText}>
              Duracion: {navigation.getParam('duracion', 'default value')}{' '}
            </Text>
            <Text style={styles.boxText}>
              Nivel: {navigation.getParam('nivel', 'default value')}{' '}
            </Text>
            <Text style={styles.boxText}>
              Fecha: {navigation.getParam('fecha', 'default value')}{' '}
            </Text>
            <ScrollView style={styles.body}>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}> {navigation.getParam('titulo', 'default value')} </Text>
                </View>
                <View style={styles.boxStyle}>
                    <View style={styles.boxInfo}>
                        <View style={styles.boxInfoTitle}>
                            <Text style={styles.boxText}>Descripcion: {navigation.getParam('descripcion', 'default value')} </Text>
                        </View>
                        

                        <Text style={styles.boxText}>Tipo: {navigation.getParam('tipo', 'default value')} </Text>
                        
                        <Text style={styles.boxText}>Nivel: {navigation.getParam('nivel', 'default value')} </Text>
                        <Text style={styles.boxText}>Fecha: {navigation.getParam('fecha', 'default value')} </Text>

                        <TextInput
                        style={styles.TextInputUser}
                        placeholder={'Inserte su nombre'}
                        secureTextEntry={true}
                        
                        />
                        <TextInput
                        style={styles.TextInputUser}
                        placeholder={'Inserte un numero de contacto '}
                        secureTextEntry={true}
                        
                        />

                        <TouchableHighlight 
                        underlayColor= 'rgba(141,126,242,0.6)'
                        style={styles.btn}>
                            <Text style={styles.btnText}>Reservar Cupo</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ffffff',
    },
    title: {
        color: '#5849bf',
        fontSize: 26,
        fontFamily: 'Montserrat',
        lineHeight: 29,
        fontWeight: 'bold',
    },
    boxTitle: {
        marginTop: 30,
        marginHorizontal: 28,
        height: 'auto'
    },
    boxStyle: {
        backgroundColor: '#f1f9ff',
        width: 325,
        height: 'auto',
        alignSelf:'center',
        borderRadius: 10,

    },
    boxInfo:{
        marginHorizontal: 14,
        
    },
    boxInfoTitle:{
        marginVertical: 15
    },
    boxText:{

        fontFamily: 'Montserrat',
        fontSize: 15,
        textAlign: 'left'
    },
    btn:{
        backgroundColor: '#8d7ef2',
        width: 111,
        height: 27,
        alignSelf: 'flex-end',
        marginBottom: 10,
        
    },
    btnText:{
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 25,
        fontWeight: '600',
     },
     TextInputUser: {
         marginVertical: 10,
         width: 270,
         height: 44,
         borderStyle: 'solid',
         borderWidth: 2,
         borderRadius: 10,
         borderColor: '#bce0fd',
         alignSelf: 'center',
         color: '#2c3d60',
         backgroundColor: '#FFF',
       },
})
