import React, {Component} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

export default class ViewNotification extends Component {
  renderItem(item) {
    return (
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Nombre: {item.item.name}</Text>
        </View>
        <View>
          <Text>Contacto: {item.item.contact}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title={'Invitar'} color={'rgb(141, 126, 242)'} />
          </View>
          <Button title={'Rechazar'} color={'rgb(141, 126, 242)'} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.navigation.getParam('data')}
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    paddingHorizontal: 10,
  },
});
