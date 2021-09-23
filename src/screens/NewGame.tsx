import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Androw from 'react-native-androw';
import QRCode from 'react-native-qrcode-svg';

import { BottomButton, PlayersSheet, Screen, TimePicker, Button } from '@components/index';

import { addPlayer, endGame, removePlayer } from '@redux/gameSlice';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import socket from '@utils/ws';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';
import { RootState } from '@redux/store';
import timeFormat from '@utils/timeFormat';
import BackButton from '@components/BackButton';

type NewGameScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.NEW_GAME>;

interface NewGameProps {}

const NewGame: React.FunctionComponent<NewGameProps> = () => {
  const navigation = useNavigation<NewGameScreenNavigationProp>();
  const { gameId, time } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    socket.on('joined', (user) => dispatch(addPlayer(user)));
    socket.on('left', (user) => dispatch(removePlayer(user)));
  }, [dispatch]);

  const handleStartGame = () => {
    socket.emit('game:start', time);
    navigation.replace(screen.COUNTDOWN);
  };

  const handleBack = () => {
    dispatch(endGame());
    socket.close();
    navigation.goBack();
  };

  return (
    <Screen style={styles.container}>
      <TimePicker visible={isVisible} setVisible={setIsVisible} />
      <BackButton onPress={handleBack} />

      <Androw style={styles.shadow}>
        <View style={styles.qrCodeContainer}>{gameId && <QRCode value={gameId} size={120} />}</View>
      </Androw>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Vrijeme igre</Text>
        <Button onPress={() => setIsVisible(true)} title={timeFormat(time) || 'Odaberi'} picker />
      </View>
      <PlayersSheet />
      <BottomButton
        title="Kreni s igrom"
        onPress={handleStartGame}
        style={{ backgroundColor: colors.black }}
        textStyle={{ color: colors.white }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
  },
  qrCodeContainer: {
    backgroundColor: colors.white,
    width: 170,
    height: 170,
    borderRadius: 24,
    marginBottom: 40,
    marginTop: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    alignItems: 'center',
  },

  timeText: {
    fontFamily: 'BarutaBlack',
    fontSize: 18,
    marginBottom: 10,
  },
  time: {
    fontFamily: 'BarutaBlack',
    fontSize: 18,
    marginRight: 28,
  },
});

export default NewGame;
