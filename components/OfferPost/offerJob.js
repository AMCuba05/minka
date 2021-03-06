
import React from 'react';
import {
    Text, StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';
import { Left, Right } from 'native-base';


const OfferJob = ({offer, navigation}) =>{
    return(
        <View style={styles.boxOffer}>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>{offer.description} </Text>
            </View>
            
            <View style={styles.boxInfo}>
                <Text style={styles.info}>Carga Horaria: {offer.workload} </Text>
                <Text style={styles.info}>Pago: {offer.payRange} </Text>
                <Text style={styles.info}>Ubicacion: {offer.location} </Text>
                <Text style={styles.info}>Publicado: {offer.createdAt} </Text>
            </View>
            <View >
                <TouchableHighlight
                onPress={() => navigation.navigate('OfferInfo',{
                    titulo: offer.organizationName,
                    horas: offer.workload,
                    ubicacion: offer.location,
                    fecha: offer.createdAt,
                    pago: offer.payRange,
                    descripcion: offer.description,
                })}
                style={styles.boxBtn}
                underlayColor= 'rgba(141,126,242,0.6)'>
                    <Text style={styles.btnText}>Leer Mas</Text>
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
        fontFamily: 'Poppins',
        paddingHorizontal: 15,
        fontWeight: 'bold'
        
    },
    boxInfo:{
        paddingHorizontal: 15,
        
    },
    info:{
        fontFamily: 'Poppins',
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