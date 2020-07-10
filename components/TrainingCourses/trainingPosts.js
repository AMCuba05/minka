
import React, { useState, useEffect } from 'react';
import {
    Text, StyleSheet,
    View, FlatList
} from 'react-native';
import PostCourse from './postCourse';
import axios from 'axios';

const TrainingPost = ({navigation}) => {

    const[coursePost, setCourse ] = useState('');

    useEffect(() => {
        const consultarAPI = async() => {
            const url = 'https://api-minka.herokuapp.com/course';
            const resultado = await axios.get(url);
            setCourse(resultado.data);

        }
        consultarAPI();
    },[]);


    return(
        <View style={styles.body}>
            
            <FlatList
                data= {coursePost}
                renderItem = {({item}) => <PostCourse course={item} navigation={navigation}/>}
                keyExtractor = {course => course.id}
            />
    </View>
    )

}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#ffffff'
    }
})

export default TrainingPost;