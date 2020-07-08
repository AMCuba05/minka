import React from 'react';
import {View, Text} from 'react-native';
import OfferjobsPost from '../components/OfferPost/offerPost';

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
