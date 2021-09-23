import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { BottomButton, CircleButton, Icon, Screen } from '@components/index';

import { LogoIcon, ChevronLeftIcon } from '@assets/icons';
import { NavigatorParamList } from '@navigation/Navigator';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import { StackNavigationProp } from '@react-navigation/stack';
import socket from '@utils/ws';
import { RootState } from '@redux/store';
import { newGame } from '@redux/gameSlice';

type HomeScreenRouteProp = RouteProp<NavigatorParamList, screen.HOME>;
type HomeScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.HOME>;

interface HomeProps {
  route: HomeScreenRouteProp;
}

const Home: React.FunctionComponent<HomeProps> = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { user } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleNewGame = () => {
    socket.auth = { user };
    socket.connect();
    socket.emit('game:new', 90);
    socket.on('gameId', (gameId) => {
      dispatch(newGame(gameId));
      navigation.navigate(screen.NEW_GAME);
    });
  };

  return (
    <Screen style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Icon width={20} height={20} icon={ChevronLeftIcon} />
      </TouchableOpacity>
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
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 24,
    position: 'absolute',
    top: 50,
    left: 38,
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
