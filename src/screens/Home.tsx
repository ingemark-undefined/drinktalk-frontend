import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { BottomButton, CircleButton, Screen, BackButton } from '@components/index';

import { fontFamily, fontSize } from '@constants/typography';
import { newGame, setStarted } from '@redux/gameSlice';
import { NavigatorParamList } from '@navigation/Navigator';
import { useAppSelector } from '@redux/hooks';
import { LogoIcon } from '@assets/icons';
import { storage } from '@hooks/useStorage';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import socket from '@utils/ws';

import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.HOME>;

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { user } = useAppSelector((state) => state.game);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.off();
    socket.close();
    storage.removeItem('loser');
    storage.removeItem('endsAt');
    dispatch(setStarted(false));
  }, [dispatch]);

  const handleNewGame = () => {
    setLoading(true);
    socket.connect();
    socket.emit('game:new');
    socket.on('gameId', (gameId) => {
      setLoading(false);
      dispatch(newGame(gameId));
      navigation.navigate(screen.NEW_GAME);
    });
  };

  return (
    <Screen style={styles.container}>
      <BackButton onPress={() => navigation.replace(screen.LOGIN)} />
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
        loading={loading}
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
    fontFamily: fontFamily.barutaBlack,
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
