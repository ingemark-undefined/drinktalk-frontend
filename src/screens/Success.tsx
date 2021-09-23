import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Screen, BottomButton, Card } from '@components/index';

import { useNavigation } from '@react-navigation/core';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';

interface SuccessProps {}

const Success: React.FunctionComponent<SuccessProps> = () => {
  const navigation = useNavigation();

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
    fontFamily: 'BarutaBlack',
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
