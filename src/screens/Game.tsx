import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import BackgroundService from 'react-native-background-actions';

import { Screen, Instructions } from '@components/index';

import { startBackgroundTask } from '@utils/backgroundTask';
import { useNavigation } from '@react-navigation/core';
import { storage, useStorage } from '@hooks/useStorage';
import socket from '@utils/ws';
import screen from '@navigation/screens';
import useInterval from '@hooks/useInterval';
import dayjs from 'dayjs';

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

  useInterval(async () => {
    const endsAt = storage.getString('endsAt');
    if (dayjs().isAfter(dayjs(endsAt))) {
      navigation.replace(screen.SUCCESS);
    }
  }, 1000);

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
