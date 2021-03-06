import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Androw from 'react-native-androw';
import QRCode from 'react-native-qrcode-svg';

import { BottomButton, PlayersSheet, Screen, TimePicker, Button, BackButton } from '@components/index';

import { addPlayer, removePlayer } from '@redux/gameSlice';
import { useAppSelector } from '@redux/hooks';
import { fontFamily } from '@constants/typography';
import timeFormat from '@utils/timeFormat';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import socket from '@utils/ws';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';

type NewGameScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.NEW_GAME>;

interface NewGameProps {}

const NewGame: React.FunctionComponent<NewGameProps> = () => {
  const navigation = useNavigation<NewGameScreenNavigationProp>();
  const { gameId, time } = useAppSelector((state) => state.game);
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

  return (
    <Screen style={styles.container}>
      <TimePicker visible={isVisible} setVisible={setIsVisible} />
      <BackButton />

      <Androw style={styles.shadow}>
        <View style={styles.qrCodeContainer}>{gameId && <QRCode value={gameId} size={120} />}</View>
      </Androw>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Game time</Text>
        <Button onPress={() => setIsVisible(true)} title={timeFormat(time) || 'Select'} picker />
      </View>
      <PlayersSheet />
      <BottomButton
        title="Start game"
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
    fontFamily: fontFamily.barutaBlack,
    fontSize: 18,
    marginBottom: 10,
  },
  time: {
    fontFamily: fontFamily.barutaBlack,
    fontSize: 18,
    marginRight: 28,
  },
});

export default NewGame;
