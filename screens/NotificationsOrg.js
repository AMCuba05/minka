import React, {Component} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}];
export default class NotificationsOrg extends Component {
  renderItem(item) {
    return (
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Nombre Trabajo {item.id}</Text>
        </View>
        <View>
          <Text>Carga Horaria</Text>
          <Text>Pago</Text>
          <Text>Ubicacion</Text>
          <Text>Fecha</Text>
        </View>
        <Button
          title={'ver'}
          onPress={() => this.props.navigation.navigate('ViewNotification')}
          color={'rgb(141, 126, 242)'}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 2,
    borderColor: 'rgba(141, 126, 242,0.5)',
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(141, 126, 242,0.5)',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
