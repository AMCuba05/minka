
import React, { useState } from 'react';
import {
    Text, StyleSheet,
    View, FlatList
} from 'react-native';
import PostCourse from './postCourse';

const TrainingPost = ({navigation}) => {

    const[coursePost, setCourse ] = useState([
        { id: 8, course: 'Reposteria Basica',
         descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus.',
         tipo: 'presencial', duracion: '1 hora', fecha: '29/04/2020', nivel: 'basico' },
        { id: 9, course: 'Reposteria Avanzada', 
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus.',
        tipo: 'presencial', duracion: '3 horas', fecha: '27/04/2020', nivel: 'basico' },
        { id: 10, course: 'Corte y confeccion',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus.',
         tipo: 'virtual', duracion: '2 horas', fecha: '29/04/2020', nivel: 'avanzado' },
        { id: 11, course: 'Corte y confeccion',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus.',
         tipo: 'presencial', duracion: '1 semana', fecha: '29/05/2020', nivel: 'basico' },
        { id: 12, course: 'Excel Basico',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus.',
         tipo: 'virtual', duracion: '3 meses', fecha: '29/04/2020', nivel: 'basico' },
        { id: 13, course: 'Excel Avanzado', 
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus.',
        tipo: 'presencial', duracion: '1 hora', fecha: '21/04/2020',nivel: 'avanzado' }
    ]);


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