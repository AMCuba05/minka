import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import offerJob from './../assets/images/OfferJob.png';
import offerCourse from './../assets/images/OfferCourse.png';

export default class OrganizationView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>¿Como deseas ayudar?</Text>
        <View style={styles.card}>
          <TouchableOpacity>
            <Image style={styles.offerjob} source={offerJob} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity>
            <Image style={styles.offerjob} source={offerCourse} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  offerjob: {
    width: 293,
    height: 219,
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  text: {
    fontSize: 24,
    color: '#8d7ef2',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
