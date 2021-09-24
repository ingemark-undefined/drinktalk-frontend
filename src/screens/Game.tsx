import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import PushNotification from 'react-native-push-notification';
import BackgroundService from 'react-native-background-actions';
import dayjs from 'dayjs';

import { Screen, Instructions } from '@components/index';

import { startBackgroundTask } from '@utils/backgroundTask';
import { storage, useStorage } from '@hooks/useStorage';
import useInterval from '@hooks/useInterval';
import screen from '@navigation/screens';
import socket from '@utils/ws';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';

type GameScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.GAME>;

interface GameProps {}

const Game: React.FunctionComponent<GameProps> = () => {
  const navigation = useNavigation<GameScreenNavigationProp>();
  const [remaining, setRemaining] = useState<number>(0);
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
    // Get time when game ends
    const endsAt = storage.getString('endsAt');

    // Calculate remaining time
    const minutes = Math.ceil(dayjs(storage.getString('endsAt')).diff(dayjs(), 'minutes', true));
    setRemaining(minutes);

    // Go to success screen if game ended
    if (dayjs().isAfter(dayjs(endsAt))) {
      navigation.replace(screen.SUCCESS);
    }
  }, 1000);

  return (
    <Screen style={styles.container}>
      <Instructions remaining={remaining} />
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
