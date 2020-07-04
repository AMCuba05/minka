
import React, { useState } from 'react';
import {
    Text, StyleSheet,
    View, FlatList,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';
import { Left, Right } from 'native-base';


const OfferJob = ({offer, navigation}) =>{
    return(
        <View style={styles.boxOffer}>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>{offer.title} </Text>
            </View>
            
            <View style={styles.boxInfo}>
                <Text style={styles.info}>Carga Horaria: {offer.hours} </Text>
                <Text style={styles.info}>Pago: {offer.payment} </Text>
                <Text style={styles.info}>Ubicacion: {offer.ubication} </Text>
                <Text style={styles.info}>Publicado: {offer.posted} </Text>
            </View>
            <View >
                <TouchableHighlight  style={styles.boxBtn}>
                    <Text style={styles.btnText}>Aplicar +</Text>
                </TouchableHighlight>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    boxOffer:{
        backgroundColor: '#FFF',
        width: 331,
        height: 176,
        borderRadius: 5,
        marginVertical: 15,
        alignSelf: 'center'

    },
    boxTitle:{
        paddingTop: 15,
        height: 60,

    },
    title:{
        fontSize: 17,
        lineHeight: 17,
        fontFamily: 'Montserrat',
        paddingHorizontal: 15
        
    },
    boxInfo:{
        paddingHorizontal: 15,
        
    },
    info:{
        fontFamily: 'Montserrat',
        fontSize:15,
        lineHeight:18
    },
    boxBtn:{
        alignSelf: 'flex-end',
        height: 30,
        width: 90,
        backgroundColor: '#8d7ef2',
        marginRight: 20,
        
        
    }, 
    btnText:{
        textAlign: 'center',
        color:'#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }

})

export default OfferJob;