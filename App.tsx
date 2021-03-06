import React from 'react';
import { StyleSheet, LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Navigator from '@navigation/Navigator';
import * as SplashScreen from 'expo-splash-screen';

import colors from '@constants/colors';
import { store } from './src/redux/store';

LogBox.ignoreLogs(['new NativeEventEmitter']);

const App = () => {
  const hide = async () => await SplashScreen.hideAsync();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.flex}>
        <Navigator onReady={() => hide()} />
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
