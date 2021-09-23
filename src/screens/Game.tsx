import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import BackgroundService from 'react-native-background-actions';

import { Screen, Instructions } from '@components/index';

import { startBackgroundTask } from '@utils/backgroundTask';
import { useNavigation } from '@react-navigation/core';
import { useStorage } from '@hooks/useStorage';
import socket from '@utils/ws';
import screen from '@navigation/screens';

interface GameProps {}

const Game: React.FunctionComponent<GameProps> = () => {
  const navigation = useNavigation();
  const [loser] = useStorage('loser');

  useEffect(() => {
    startBackgroundTask();

    socket.on('left', () => {
      BackgroundService.stop();
      PushNotification.cancelAllLocalNotifications();
    });
  }, []);

  useEffect(() => {
    if (loser) {
      navigation.replace(screen.LOSER);
    }
  }, [loser, navigation]);

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
