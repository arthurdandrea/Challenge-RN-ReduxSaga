import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducers from './reducers';
import Reactotron from 'reactotron-react-native';
import reactotron from '../ReactotronConfig';

function sagaEnhancer(sagaMiddleware) {
  return (createStore) => {
    return (reducer, preloadedState) => {
      const store = createStore(reducer, preloadedState);
      return {
        ...store,
        sagas: {
          run: sagaMiddleware.run,
          end: () => store.dispatch(END),
          setContext: sagaMiddleware.setContext,
        },
      };
    };
  };
}

export default function configureStore() {
  const sagaMonitor = reactotron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares), sagaEnhancer(sagaMiddleware), reactotron.createEnhancer()]
  return createStore(reducers, compose(...enhancers));
}
