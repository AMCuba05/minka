import React, {Component} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}];
export default class ViewNotification extends Component {
  renderItem(item) {
    return (
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Perfil name {item.id}</Text>
        </View>
        <View>
          <Text>Celular</Text>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    paddingHorizontal: 10,
  },
});
