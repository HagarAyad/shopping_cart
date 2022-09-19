import React, {useEffect} from 'react';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {Provider} from 'react-redux';
import store from '~store/index';
import AppNavigation from './src/navigation';

const App = () => {
  const settAppLTR = () => {
    if (I18nManager.isRTL) {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  };
  useEffect(() => {
    settAppLTR();
  }, []);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
