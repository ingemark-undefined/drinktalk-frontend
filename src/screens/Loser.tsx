import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Screen, BottomButton, Card } from '@components/index';

import { fontFamily, fontSize } from '@constants/typography';
import { useStorage } from '@hooks/useStorage';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import socket from '@utils/ws';

import { NavigatorParamList } from '@navigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';

type LoserScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.LOSER>;

interface LoserProps {}

const Loser: React.FunctionComponent<LoserProps> = () => {
  const navigation = useNavigation<LoserScreenNavigationProp>();
  const [loser] = useStorage('loser');

  useEffect(() => {
    socket.close();
  }, []);

  return (
    <Screen style={styles.container}>
      <Card>
        <Text style={[styles.text, styles.title]}>Looooser is...</Text>
        <Text style={[styles.text, styles.name]}>{loser}</Text>
        <Text style={[styles.text, styles.subtitle]}>They don't listen to the team and pay this round.</Text>
      </Card>
      <BottomButton title="New game?" onPress={() => navigation.replace(screen.HOME)} />
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
