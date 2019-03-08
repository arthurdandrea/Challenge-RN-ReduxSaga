import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
    headerStyle: {
      backgroundColor: '#fce100',
    },
  };
  render() {
    return <View style={styles.container}>
      <Text>Open up src/screens/HomeScreen.js to start working on your app!</Text>
      <Button
        title="Go to List"
        onPress={() => this.props.navigation.navigate('List')}
      />
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
