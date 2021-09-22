import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { Screen, Instructions } from '@components/index';

import { fontSize } from '@constants/typography';
import colors from '@constants/colors';

interface CountdownProps {}

const Countdown: React.FunctionComponent<CountdownProps> = () => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Spusti i ne diraj mobitel za</Text>
      <CountdownCircleTimer isPlaying duration={10} trailStrokeWidth={0} strokeWidth={10} size={200} colors={colors.white}>
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
