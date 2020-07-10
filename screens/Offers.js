import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import OfferjobsPost from '../components/OfferPost/offerPost';
import {HomeTitle} from '../components/HomeTM/HomeTitle';

export default class Offers extends React.Component {
  
  render() {
    
    return (
      <View>

        
        <OfferjobsPost 
            navigation={this.props.navigation}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn:{
    width: 50,
    position: 'relative',
    alignSelf: 'flex-end',
    marginTop: 0
  }
})

