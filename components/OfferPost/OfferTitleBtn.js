import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OfferTitle from './OfferTitle';
import ModalPost from './modalPost';
let IconComponent = Icon;

const OfferTitleBtn = ({setOfferJob}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={styles.iconBox}>

                <TouchableWithoutFeedback
                   
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.flexBtn}>
                    <Text style={styles.textBtn}>Filtrar Busqueda </Text>
                    <IconComponent name={'chevron-down'} size={25} color={'#8d7ef2'} />
                    </View>   
                </TouchableWithoutFeedback>

            </View>
            <View>
                <ModalPost modalVisible={modalVisible} setModalVisible={setModalVisible} setOfferJob={setOfferJob}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    iconBox: {
        backgroundColor: '#FFF',
        alignSelf: 'center',
        marginVertical: 5,
        padding: 5, 
        borderColor: '#5849bf',
        borderWidth: 1
        
    },
    flexBtn:{
        flexDirection: 'row',
    },
    textBtn:{

    color: '#5849bf',
       textAlign: 'center',
       fontSize: 20,
       fontWeight: 'bold' 
    }
})

export default OfferTitleBtn;