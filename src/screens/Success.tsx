import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { Screen, BottomButton, Card } from '@components/index';

import { NavigatorParamList } from '@navigation/Navigator';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';

type SuccessScreenRouteProp = RouteProp<NavigatorParamList, screen.HOME>;

interface SuccessProps {
  route: SuccessScreenRouteProp;
}

const Success: React.FunctionComponent<SuccessProps> = () => {
  return (
    <Screen style={styles.container}>
      <Card>
        <Text style={[styles.text, styles.title]}>Bravo!</Text>
        <Text style={[styles.text, styles.subtitle]}>Vi ste prava ekipa koja može zaboraviti tehnologiju na tren.</Text>
      </Card>
      <BottomButton title="Nova igra?" />
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
