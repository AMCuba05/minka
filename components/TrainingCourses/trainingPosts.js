
import React, { useState } from 'react';
import {
    Text, StyleSheet,
    View, FlatList
} from 'react-native';
import PostCourse from './postCourse';

const TrainingPost = () => {

    const[coursePost, setCourse ] = useState([
        { id: 8, course: 'Reposteria Basica', tipo: 'presencial', duracion: '1 hora', fecha: '29/04/2020' },
        { id: 9, course: 'Reposteria Avanzada', tipo: 'presencial', duracion: '3 horas', fecha: '27/04/2020' },
        { id: 10, course: 'Corte y confeccion', tipo: 'virtual', duracion: '2 horas', fecha: '29/04/2020' },
        { id: 11, course: 'Corte y confeccion', tipo: 'presencial', duracion: '1 semana', fecha: '29/05/2020' },
        { id: 12, course: 'Excel Basico', tipo: 'virtual', duracion: '3 meses', fecha: '29/04/2020' },
        { id: 13, course: 'Excel Avanzado', tipo: 'presencial', duracion: '1 hora', fecha: '21/04/2020' }
    ]);


    return(
        <View style={styles.body}>
            <FlatList
                data= {coursePost}
                renderItem = {({item}) => <PostCourse course={item} />}
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