import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

let IconComponent = Icon;

const CourseTitleBtn = () => {
    return (
        <>
            <View style={styles.iconBox}>

                <TouchableWithoutFeedback
                    onPress={() => console.log('')}
                >
                    <IconComponent name={'chevron-down'} size={35} color={'#8d7ef2'} />
                </TouchableWithoutFeedback>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    iconBox: {
        marginHorizontal: 10
    }
})

export default CourseTitleBtn;