import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import OfferjobsPost from '../components/OfferPost/offerPost';
import OfferTitleBtn from '../components/OfferPost/OfferTitleBtn'
export default class Offers extends React.Component {
  
  render() {
    
    return (
      <View>
        <View style={styles.body}>

        <OfferTitleBtn/>
        </View>

        <OfferjobsPost 
            navigation={this.props.navigation}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f1f9ff',
  }
})



