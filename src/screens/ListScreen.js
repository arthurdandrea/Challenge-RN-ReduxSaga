import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class ListScreen extends Component {
  static navigationOptions = {
    headerTitle: 'List',
    headerStyle: {
      backgroundColor: '#fce100',
    },
  };
  render() {
    return <View style={styles.container}>
      <Text>Open up src/screens/ListScreen.js to start working on your app!</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce100',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
