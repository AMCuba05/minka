
import React, { useState, useEffect } from 'react';
import {
    Text, StyleSheet,
    View, FlatList
} from 'react-native';
import OfferJob from './offerJob';
import OfferTitleBtn from './OfferTitleBtn';
import axios from 'axios';
const OfferjobsPost = ({navigation}) => {

    const [offerJob, setOfferJob] = useState('');

    useEffect(() => {
        const consultarAPI = async() => {
            const url = 'https://api-minka.herokuapp.com/job';
            const resultado = await axios.get(url);
            setOfferJob(resultado.data);

        }
        consultarAPI();
    },[]);
    return (

        <View style={styles.body}>
            <OfferTitleBtn setOfferJob={setOfferJob}/>
            
            <FlatList

                data={offerJob}
                renderItem={({ item }) => <OfferJob offer={item} navigation={navigation} />}
                keyExtractor={offer => offer.id}
            />
            
        </View>
    )

}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#f1f9ff',
        height: '100%',
        width: '100%'
    }
})

export default OfferjobsPost;
