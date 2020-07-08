import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableHighlight } from 'react-native';

export default class OffersInfo extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.body}>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}>{navigation.getParam('titulo', 'default value')} </Text>
                </View>
                <View style={styles.boxStyle}>
                    <View style={styles.boxInfo}>
                        <View style={styles.boxInfoTitle}>
                            <Text style={styles.boxText}>Descripcion: {navigation.getParam('descripcion', 'default value')} </Text>
                        </View>


                        <Text style={styles.boxText}>Ubicacion: {navigation.getParam('ubicacion', 'default value')} </Text>
                        <Text style={styles.boxText}>Carga Horaria: {navigation.getParam('horas', 'default value')} </Text>
                        <Text style={styles.boxText}>Pago: {navigation.getParam('pago', 'default value')} </Text>
                        <Text style={styles.boxText}>Fecha: {navigation.getParam('fecha', 'default value')} </Text>

                        <TouchableHighlight
                            underlayColor='rgba(141,126,242,0.6)'
                            style={styles.btn}>
                            <Text style={styles.btnText}>Aplicar</Text>
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
        alignSelf: 'center',
        borderRadius: 10,

    },
    boxInfo: {
        marginHorizontal: 14,

    },
    boxInfoTitle: {
        marginVertical: 15
    },
    boxText: {

        fontFamily: 'Montserrat',
        fontSize: 15,
        textAlign: 'left'
    },
    btn: {
        backgroundColor: '#8d7ef2',
        width: 111,
        height: 27,
        alignSelf: 'flex-end',
        marginBottom: 10,

    },
    btnText: {
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 25,
        fontWeight: '600',
    }
})