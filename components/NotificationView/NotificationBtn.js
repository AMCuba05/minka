import React, { useState } from 'react';
import { View, Text, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import TrainingPost from './../TrainingCourses/trainingPosts';
import OfferjobsPost from './../OfferPost/offerPost';
import NotificationPost from './notificationPost';
const NotificationBtn = ({ navigation }) => {


    const [mostrarCurso, guardarMostrarCursos] = useState(1);
    
   
    const mostrar = (num) => {
        guardarMostrarCursos(num);
    }
    return (
        <View>
            <View style={styles.boxBtns}>
                <TouchableHighlight
                    onPress={() => mostrar(1)}
                    underlayColor='rgba(141,126,242,0.6)'
                    style={styles.btn}>
                    <Text style={styles.btnText}> Trabajo </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => mostrar(2)}
                    underlayColor='rgba(141,126,242,0.6)'
                    style={styles.btn}>
                    <Text style={styles.btnText}> Cursos </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => mostrar(3)}
                    underlayColor='rgba(141,126,242,0.6)'
                    style={styles.btn}>
                    <Text style={styles.btnText}> Contacto </Text>
                </TouchableHighlight>
            </View>
            {mostrarCurso == 2 ? (
                <>
                    <View>
                        <TrainingPost

                            navigation={navigation}
                        />
                    </View>

                </>

            ) : mostrarCurso == 3 ? (
                <>
                    <View>
                        <NotificationPost/>
                    </View>
                </>
            ) : (


                        <>

                            <View>
                                <OfferjobsPost
                                    navigation={navigation}
                                />
                            </View>
                        </>
                    )}

        </View>
    )

}

const styles = StyleSheet.create({

    boxBtns: {

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderBottomColor: '#8d7ef2',
        borderBottomWidth: 2,
        paddingBottom: 20
    },
    btn: {

        height: 30,
        width: 90,
        backgroundColor: '#8d7ef2',
        marginHorizontal: 20,

    },
    btnText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default NotificationBtn;
