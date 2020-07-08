
import React, { useState } from 'react';
import {
    Text, StyleSheet,
    View, FlatList
} from 'react-native';
import OfferJob from './offerJob';

const OfferjobsPost = ({navigation}) => {

    const [offerJob, setOfferJob] = useState([
        { id: 1, title: 'Requerimos ayudante de reposteria con o sin experiencia',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus. Cras et mi id urna sollicitudin consectetur in ut turpis. Proin tristique felis at erat iaculis, ut convallis lacus pellentesque. Cras est velit, varius a mauris vitae, porta congue massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut ex eu nisi accumsan porttitor eget vitae neque. Phasellus faucibus eu nisl faucibus sagittis. Donec tempor tristique turpis vel dignissim. Maecenas nec velit leo. Mauris et metus lobortis, vehicula augue non, elementum erat. Nunc eleifend lorem at ex mollis, vitae cursus nisl cursus. Vivamus nisl dolor, dapibus nec ultricies vitae, viverra ac metus.',
        hours: '4 horas/dia', payment: '1200 Bs', ubication: 'Quillacollo', posted: '12/05/20' },
        { id: 2, title: 'Requerimos ayudante de reposteria con o sin experiencia',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus. Cras et mi id urna sollicitudin consectetur in ut turpis. Proin tristique felis at erat iaculis, ut convallis lacus pellentesque. Cras est velit, varius a mauris vitae, porta congue massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut ex eu nisi accumsan porttitor eget vitae neque. Phasellus faucibus eu nisl faucibus sagittis. Donec tempor tristique turpis vel dignissim. Maecenas nec velit leo. Mauris et metus lobortis, vehicula augue non, elementum erat. Nunc eleifend lorem at ex mollis, vitae cursus nisl cursus. Vivamus nisl dolor, dapibus nec ultricies vitae, viverra ac metus.',
         hours: '8 horas/dia', payment: '2200 Bs', ubication: 'Cercado', posted: '15/05/20' },
        { id: 3, title: 'Requerimos ayudante de reposteria con o sin experiencia',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus. Cras et mi id urna sollicitudin consectetur in ut turpis. Proin tristique felis at erat iaculis, ut convallis lacus pellentesque. Cras est velit, varius a mauris vitae, porta congue massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut ex eu nisi accumsan porttitor eget vitae neque. Phasellus faucibus eu nisl faucibus sagittis. Donec tempor tristique turpis vel dignissim. Maecenas nec velit leo. Mauris et metus lobortis, vehicula augue non, elementum erat. Nunc eleifend lorem at ex mollis, vitae cursus nisl cursus. Vivamus nisl dolor, dapibus nec ultricies vitae, viverra ac metus.',
         hours: '4 horas/dia', payment: '1000 Bs', ubication: 'Vinto', posted: '20/05/20' },
        { id: 4, title: 'Requerimos ayudante de reposteria con o sin experiencia',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus. Cras et mi id urna sollicitudin consectetur in ut turpis. Proin tristique felis at erat iaculis, ut convallis lacus pellentesque. Cras est velit, varius a mauris vitae, porta congue massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut ex eu nisi accumsan porttitor eget vitae neque. Phasellus faucibus eu nisl faucibus sagittis. Donec tempor tristique turpis vel dignissim. Maecenas nec velit leo. Mauris et metus lobortis, vehicula augue non, elementum erat. Nunc eleifend lorem at ex mollis, vitae cursus nisl cursus. Vivamus nisl dolor, dapibus nec ultricies vitae, viverra ac metus.',
         hours: '4 horas/dia', payment: '1200 Bs', ubication: 'Quillacollo', posted: '12/05/20' },
        { id: 5, title: 'Requerimos ayudante de reposteria con o sin experiencia',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus. Cras et mi id urna sollicitudin consectetur in ut turpis. Proin tristique felis at erat iaculis, ut convallis lacus pellentesque. Cras est velit, varius a mauris vitae, porta congue massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut ex eu nisi accumsan porttitor eget vitae neque. Phasellus faucibus eu nisl faucibus sagittis. Donec tempor tristique turpis vel dignissim. Maecenas nec velit leo. Mauris et metus lobortis, vehicula augue non, elementum erat. Nunc eleifend lorem at ex mollis, vitae cursus nisl cursus. Vivamus nisl dolor, dapibus nec ultricies vitae, viverra ac metus.',
         hours: '8 horas/dia', payment: '2200 Bs', ubication: 'Cercado', posted: '15/05/20' },
        { id: 6, title: 'Requerimos ayudante de reposteria con o sin experiencia', 
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum, quam non facilisis tempus, mi enim mollis justo, semper vehicula justo odio ut tellus. Cras et mi id urna sollicitudin consectetur in ut turpis. Proin tristique felis at erat iaculis, ut convallis lacus pellentesque. Cras est velit, varius a mauris vitae, porta congue massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque ut ex eu nisi accumsan porttitor eget vitae neque. Phasellus faucibus eu nisl faucibus sagittis. Donec tempor tristique turpis vel dignissim. Maecenas nec velit leo. Mauris et metus lobortis, vehicula augue non, elementum erat. Nunc eleifend lorem at ex mollis, vitae cursus nisl cursus. Vivamus nisl dolor, dapibus nec ultricies vitae, viverra ac metus.',
        hours: '4 horas/dia', payment: '1000 Bs', ubication: 'Vinto', posted: '20/05/20' },
    
    ]);

    return (
        <View style={styles.body}>
            
            <FlatList

                data={offerJob}
                renderItem={({ item }) => <OfferJob offer={item} navigation={navigation}/>}
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
