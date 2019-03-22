import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
//import apisaucePlugin from 'reactotron-apisauce';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin())
  //.use(apisaucePlugin()) 
  .useReactNative()
  .connect();

export default reactotron;