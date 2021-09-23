import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import { Screen, BottomButton, Card } from '@components/index';

import { NavigatorParamList } from '@navigation/Navigator';
import { useStorage } from '@hooks/useStorage';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';

type LoserScreenRouteProp = RouteProp<NavigatorParamList, screen.LOSER>;

interface LoserProps {
  route: LoserScreenRouteProp;
}

const Loser: React.FunctionComponent<LoserProps> = () => {
  const [loser] = useStorage('loser');
  const navigation = useNavigation();

  return (
    <Screen style={styles.container}>
      <Card>
        <Text style={[styles.text, styles.title]}>Luuuzeer je...</Text>
        <Text style={[styles.text, styles.name]}>{loser}</Text>
        <Text style={[styles.text, styles.subtitle]}>Ne sluša ekipu i plaća ovu rundu.</Text>
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
  name: {
    fontSize: fontSize.large,
    color: colors.black,
    marginVertical: 20,
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
