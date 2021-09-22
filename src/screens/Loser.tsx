import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { Screen, BottomButton, Card } from '@components/index';

import { NavigatorParamList } from '@navigation/Navigator';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';

type LoserScreenRouteProp = RouteProp<NavigatorParamList, screen.HOME>;

interface LoserProps {
  route: LoserScreenRouteProp;
}

const Loser: React.FunctionComponent<LoserProps> = () => {
  return (
    <Screen style={styles.container}>
      <Card>
        <Text style={[styles.text, styles.title]}>Luuuzeer je...</Text>
        <Text style={[styles.text, styles.name]}>Krešo Orešković</Text>
        <Text style={[styles.text, styles.subtitle]}>Ne sluša ekipu i plaća ovu rundu.</Text>
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
  name: {
    fontSize: fontSize.large,
    color: colors.black,
    marginVertical: 14,
  },
  title: {
    fontSize: fontSize.extraLarge,
    color: colors.primary,
  },
  subtitle: {
    fontSize: fontSize.large,
    color: colors.primary,
  },
});

export default Loser;
