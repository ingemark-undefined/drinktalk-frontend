import React from 'react';
import { StyleSheet } from 'react-native';

import { Screen, Instructions } from '@components/index';

interface GameProps {}

const Game: React.FunctionComponent<GameProps> = () => {
  return (
    <Screen style={styles.container}>
      <Instructions />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20%',
  },
});

export default Game;
