import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import configureStore from './store/configure';
import rootSaga from './store/sagas';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
// import DetailsScreen from './screens/DetailsScreen';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const AppRoutes = createStackNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
//  Details: { screen: DetailsScreen },
});

const AppContainer = createAppContainer(AppRoutes);

const store = configureStore();
store.sagas.run(rootSaga);

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>;
  }
}
