import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

import { Screen, BottomButton, Card } from '@components/index';

import { fontFamily, fontSize } from '@constants/typography';
import { useNavigation } from '@react-navigation/core';
import colors from '@constants/colors';
import screen from '@navigation/screens';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';
import socket from '@utils/ws';

type SuccessScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.SUCCESS>;

interface SuccessProps {}

const Success: React.FunctionComponent<SuccessProps> = () => {
  const navigation = useNavigation<SuccessScreenNavigationProp>();

  useEffect(() => {
    socket.close();
  }, []);

  return (
    <Screen style={styles.container}>
      <Card>
        <Text style={[styles.text, styles.title]}>Bravo!</Text>
        <Text style={[styles.text, styles.subtitle]}>Vi ste prava ekipa koja može zaboraviti tehnologiju na tren.</Text>
      </Card>
      <BottomButton title="Nova igra?" onPress={() => navigation.replace(screen.HOME)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fontFamily.barutaBlack,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSize.large,
    color: colors.black,
    marginVertical: 14,
  },
  title: {
    fontSize: fontSize.extraLarge,
    color: colors.primary,
  },
});

export default Success;
