import React from 'react';
import { StyleSheet } from 'react-native';

import { Screen } from '@components/index';

import Instructions from '@components/Instructions';

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
