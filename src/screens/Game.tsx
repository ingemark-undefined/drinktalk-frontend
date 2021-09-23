import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Screen, Instructions } from '@components/index';

import { startBackgroundTask } from '@utils/backgroundTask';

interface GameProps {}

const Game: React.FunctionComponent<GameProps> = () => {
  useEffect(() => {
    startBackgroundTask();
  }, []);

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
