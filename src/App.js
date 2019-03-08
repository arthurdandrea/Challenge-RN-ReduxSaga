import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
// import DetailsScreen from './screens/DetailsScreen';

const AppRoutes = createStackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
//  Details: { screen: DetailsScreen },
});

const AppContainer = createAppContainer(AppRoutes);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
