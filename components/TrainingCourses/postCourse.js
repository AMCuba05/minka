
import React, { useState } from 'react';
import {
    Text,
    View, StyleSheet,
    TouchableHighlight
} from 'react-native';

const PostCourse = ({ course, navigation }) => {
    return (
        <View style={styles.boxCourse}>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>{course.courseName}</Text>
            </View>
            <View style={styles.flexbox}>
                <View style={styles.boxInfo}>
                    <Text style={styles.info} >Categoria: {course.field}</Text>
                    <Text style={styles.info}>Dificultad: {course.difficulty}</Text>
                    <Text style={styles.info}>Fecha de Inicio: </Text>
                    <Text>{course.startDate}</Text>
                </View>
                <View  >
                    <TouchableHighlight 
                    onPress={() => navigation.navigate('CourseInfo',{
                        titulo: course.course,
                        descripcion: course.descripcion,
                        tipo: course.tipo,
                        duracion: course.duracion,
                        fecha: course.fecha,
                        nivel: course.nivel,    
                    })}
                    style={styles.boxBtn}
                    underlayColor= 'rgba(141,126,242,0.6)'>
                        <Text style={styles.btnText}>Leer Mas +</Text>
                    </TouchableHighlight>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    boxCourse: {
        backgroundColor: '#f1f9ff',
        width: 300,
        height: 128,
        borderRadius: 10,
        marginVertical: 15,
        alignSelf: 'center'
    },
    boxTitle: {
        alignItems: 'center',
        height: 30,
        paddingTop: 15

    },
    title: {
        fontSize: 17,
        lineHeight: 17,
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    boxInfo: {
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: 10

    },
    info: {
        fontFamily: 'Montserrat',
        fontSize: 15,
        lineHeight: 18
    },
    boxBtn: {
        marginVertical: 10,
        height: 50,
        width: 70,
        backgroundColor: '#8d7ef2',
         justifyContent: 'center'

    },
    btnText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
        
    },
    flexbox:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center'
    }
})

export default PostCourse;
