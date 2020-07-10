import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
let IconComponent = Icon;
const OfferTitle = () => {
    return(
        <>
            <View style={styles.flex}>
                <IconComponent name={'shopping-bag'} size={35} color={'#8d7ef2'} />
                <View style={styles.boxTitle}>

                    <Text style={styles.title}>Ofertas</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    flex:{
        flexDirection: 'row',
        flex: 1,
    },
    boxTitle:{
       marginHorizontal: 20,
       justifyContent: 'center'
    },
    title:{
        color: '#5849bf',
       textAlign: 'center',
       fontSize: 25,
       fontWeight: 'bold' 
    }
})

export default OfferTitle;