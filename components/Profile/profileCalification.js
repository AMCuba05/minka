import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';


const ProfileCalification = () => {
    return (
        <View style={styles.boxCalification}>
            <Text style={styles.title}>Valoracion</Text>
            <View style={styles.flexBox}>
                <View>
                    <ProgressCircle
                        percent={30}
                        radius={60}
                        borderWidth={8}
                        color='rgb(141,126,242)'
                        shadowColor="rgba(141,126,242,0.1)"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{'30%'} </Text>
                    </ProgressCircle>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.textCalification}>Calificaciones en cursos: 30.5</Text>
                </View>
            </View>
            <View style={styles.flexBox}>
                <View >
                    <ProgressCircle
                        percent={30}
                        radius={60}
                        borderWidth={8}
                        color='rgb(141,126,242)'
                        shadowColor="rgba(141,126,242,0.1)"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 18 }}>{'30%'} </Text>
                    </ProgressCircle>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.textCalification}>Calificaciones en Entrevistas: 30.5</Text>
                </View>
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    boxCalification:{
        marginHorizontal: 30,
        marginTop: 10
    },
    flexBox:{
        flexDirection: 'row',
        marginBottom: 20
    }, 
    title:{
        color: '#5849bf',
        fontSize: 20,
        marginBottom: 10
    },
    boxText:{
        justifyContent:'center',
        marginHorizontal: 10,
        alignContent: 'center'
    },
    textCalification: {
        fontSize: 14,
        textAlign: "center"
    }
})

export default ProfileCalification;