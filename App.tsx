import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from '@navigation/Navigator';

import colors from '@constants/colors';

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
    backgroundColor: colors.primary,
  },
});

export default App;
