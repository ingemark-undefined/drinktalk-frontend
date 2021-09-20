import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';
import Navigator from '@navigation/Navigator';

RNBootSplash.hide({ fade: true });

const App = () => {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <Navigator />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
