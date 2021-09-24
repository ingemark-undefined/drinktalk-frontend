import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { Screen, Instructions } from '@components/index';

import { scheduleWinNotification } from '@utils/notifications';
import { setStarted, setTime } from '@redux/gameSlice';
import { RootState } from '@redux/store';
import { fontSize } from '@constants/typography';
import { storage } from '@hooks/useStorage';
import socket from '@utils/ws';
import screen from '@navigation/screens';
import colors from '@constants/colors';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';

type CountdownScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.COUNTDOWN>;

interface CountdownProps {}

const Countdown: React.FunctionComponent<CountdownProps> = () => {
  const dispatch = useDispatch();
  const { time } = useSelector((state: RootState) => state.game);
  const navigation = useNavigation<CountdownScreenNavigationProp>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    socket.on('started', (t) => {
      dispatch(setTime(t));
      dispatch(setStarted(true));
      setIsPlaying(true);
    });
  }, [dispatch]);

  const handleStart = () => {
    // Schedule local win notification
    scheduleWinNotification(time);
    // Go to the game screen
    navigation.replace(screen.GAME);
    // Set the game end time
    storage.setString('endsAt', dayjs().add(time, 'minutes').toISOString());
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Spusti i ne diraj mobitel za</Text>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={10}
        trailStrokeWidth={0}
        strokeWidth={10}
        size={200}
        colors={colors.white}
        onComplete={handleStart}>
        {({ remainingTime }) => <Animated.Text style={styles.countdownText}>{remainingTime}</Animated.Text>}
      </CountdownCircleTimer>
      <Text style={styles.text}>sekundi</Text>
      <View style={styles.instructions}>
        <Instructions />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20%',
  },
  text: {
    fontFamily: 'BarutaBlack',
    fontSize: fontSize.medium,
    marginVertical: 30,
    width: 150,
    textAlign: 'center',
  },
  instructions: {
    position: 'absolute',
    bottom: 30,
  },
  countdownText: {
    fontFamily: 'BarutaBlack',
    fontSize: 100,
  },
});

export default Countdown;
