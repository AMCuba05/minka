import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalCourse from './modalCourse';
let IconComponent = Icon;

const CourseTitleBtn = () => {
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
                <View>
                    <ModalCourse modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                </View>

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

export default CourseTitleBtn;