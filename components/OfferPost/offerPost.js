
import React, { useState } from 'react';
import {
    Text, StyleSheet,
    View, FlatList
} from 'react-native';
import OfferJob from './offerJob';

const OfferjobsPost = () => {

    const [offerJob, setOfferJob] = useState([
        { id: 1, title: 'Requerimos ayudante de reposteria con o sin experiencia', hours: '4 horas/dia', payment: '1200 Bs', ubication: 'Quillacollo', posted: '12/05/20' },
        { id: 2, title: 'Requerimos ayudante de reposteria con o sin experiencia', hours: '8 horas/dia', payment: '2200 Bs', ubication: 'Cercado', posted: '15/05/20' },
        { id: 3, title: 'Requerimos ayudante de reposteria con o sin experiencia', hours: '4 horas/dia', payment: '1000 Bs', ubication: 'Vinto', posted: '20/05/20' },
        { id: 4, title: 'Requerimos ayudante de reposteria con o sin experiencia', hours: '4 horas/dia', payment: '1200 Bs', ubication: 'Quillacollo', posted: '12/05/20' },
        { id: 5, title: 'Requerimos ayudante de reposteria con o sin experiencia', hours: '8 horas/dia', payment: '2200 Bs', ubication: 'Cercado', posted: '15/05/20' },
        { id: 6, title: 'Requerimos ayudante de reposteria con o sin experiencia', hours: '4 horas/dia', payment: '1000 Bs', ubication: 'Vinto', posted: '20/05/20' },
    
    ]);

    return (
        <View style={styles.body}>
            
            <FlatList

                data={offerJob}
                renderItem={({ item }) => <OfferJob offer={item} />}
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
