import React, { useState } from 'react';
import { View, Text, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
let IconComponent = Icon;
let iconName = 'user';
const NotificationPosts = () => {
    return (
        <ScrollView style={styles.body}>
            <View style={styles.boxNotification}>
                <IconComponent name={iconName} size={28} color={'#8d7ef2'} />
                <View>
                    <Text style={styles.boxTitle}>Eventos S.S quiere contactarte !!</Text>
                    <View style={styles.flexBtn}>
                        <TouchableHighlight style={styles.btn}>
                            <Text style={styles.btnText}>Contactenme</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn}>
                            <Text style={styles.btnText}>Rechazar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={styles.boxNotification}>
                <IconComponent name={iconName} size={28} color={'#8d7ef2'} />
                <View>
                    <Text style={styles.boxTitle}>Eventos S.S quiere contactarte !!</Text>
                    <View style={styles.flexBtn}>
                        <TouchableHighlight style={styles.btn}>
                            <Text style={styles.btnText}>Contactenme</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn}>
                            <Text style={styles.btnText}>Rechazar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
           
            <View style={styles.boxNotification}>
                <IconComponent name={iconName} size={28} color={'#8d7ef2'} />
                <View>
                    <Text style={styles.boxTitle}>Eventos S.S quiere contactarte !!</Text>
                    <View style={styles.flexBtn}>
                        <TouchableHighlight style={styles.btn}>
                            <Text style={styles.btnText}>Contactenme</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn}>
                            <Text style={styles.btnText}>Rechazar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
           
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f1f9ff',


    },

    boxNotification: {
        marginHorizontal: 20,
        padding: 20,
        borderBottomWidth: 2,
        borderColor: '#8d7ef2',
        flexDirection: 'row'
    },
    boxTitle: {
        color: '#8d7ef2',
        fontSize: 17,
        marginHorizontal: 20
    },
    btn: {

        height: 30,
        width: 120,
        backgroundColor: '#8d7ef2',
        marginHorizontal: 20,

    },
    btnText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 15,
        lineHeight: 27

    },
    flexBtn: {

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,

    }
})
export default NotificationPosts;