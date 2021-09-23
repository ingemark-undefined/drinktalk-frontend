import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';

import { Screen, Instructions } from '@components/index';

import { startBackgroundTask } from '@utils/backgroundTask';
import socket from '@utils/ws';

interface GameProps {}

const Game: React.FunctionComponent<GameProps> = () => {
  useEffect(() => {
    startBackgroundTask();

    socket.on('left', () => {
      PushNotification.cancelAllLocalNotifications();
    });
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
