import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

let IconComponent = Icon;
const ProfileInfo = () => {
    const [perfil, setPerfil] = useState([
        { nombre: 'Adrian Cuba', email: 'adrian0512@gmail.com', ci: 13163239, descripcion:'Ingeniero de software en JALA' }
    ]);
    return (
        <View style={styles.bodyInfo}>
            <View style={styles.flexBoxInfo}>
                <View style={styles.iconBox}>
                    <IconComponent name={'street-view'} size={100} color={'#8d7ef2'} />
                </View>
                <View>
                    <Text style={styles.titleInfoBox}>Informacion de Contacto</Text>
                    <Text style={styles.textTitleInfo}>Email:</Text>
                    <Text style={styles.textInfo}>{perfil[0].email}</Text>
                    <Text style={styles.textTitleInfo}>CI: </Text>
                    <Text style={styles.textInfo}>{perfil[0].ci} </Text>
                </View>

            </View>
            <View>
                <Text style={styles.nameBox}> {perfil[0].nombre} </Text>
                <Text style={styles.descripcionBox}>{perfil[0].descripcion}</Text>
            </View>
        </View>

    )


}

const styles = StyleSheet.create({
    bodyInfo:{
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
        paddingBottom: 15,
        borderBottomColor: '#8d7ef2',
        borderBottomWidth: 2
    },
    flexBoxInfo:{
        flexDirection: 'row',
        marginBottom: 30
    }, 
    iconBox:{
        marginRight: 20
    },
    titleInfoBox:{
        color: '#5849bf',
        fontSize: 17,
        marginBottom: 10
    },
    textTitleInfo:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    textInfo:{
        fontSize: 14,
        marginLeft: 20
    },
    nameBox:{
        fontSize: 20
    }, 
    descripcionBox:{
        fontSize: 15,
        marginLeft: 5
    }
})

export default ProfileInfo;