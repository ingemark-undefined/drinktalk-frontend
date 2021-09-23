import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { BottomButton, CircleButton, Screen } from '@components/index';

import { LogoIcon } from '@assets/icons';
import { NavigatorParamList } from '@navigation/Navigator';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import { StackNavigationProp } from '@react-navigation/stack';
import socket from '@utils/ws';
import { RootState } from '@redux/store';
import { newGame } from '@redux/gameSlice';
import BackButton from '@components/BackButton';
import { storage } from '@hooks/useStorage';

type HomeScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.HOME>;

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { user } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    storage.removeItem('loser');
  }, []);

  const handleNewGame = () => {
    socket.connect();
    socket.emit('game:new');
    socket.on('gameId', (gameId) => {
      dispatch(newGame(gameId));
      navigation.navigate(screen.NEW_GAME);
    });
  };

  return (
    <Screen style={styles.container}>
      <BackButton />
      <LogoIcon style={styles.logoIcon} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.white]}>Hellou</Text>
        <Text style={styles.text}>{user}</Text>
      </View>

      <CircleButton
        size={150}
        title="Kreiraj igru"
        onPress={handleNewGame}
        style={styles.createButton}
        textStyle={{ fontSize: fontSize.mediumLarge }}
      />
      <BottomButton title="Prijavi se u postojeću igru" onPress={() => navigation.navigate(screen.SCAN)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    marginTop: 70,
  },
  textContainer: {
    marginTop: 62,
    marginBottom: 56,
  },
  text: {
    fontFamily: 'BarutaBlack',
    fontSize: fontSize.extraLarge,
    textAlign: 'center',
  },
  white: {
    color: colors.white,
  },
  createButton: {
    marginBottom: 150,
  },
});

export default Home;
