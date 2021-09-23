import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Androw from 'react-native-androw';
import QRCode from 'react-native-qrcode-svg';

import { BottomButton, Icon, PlayersSheet, Screen, TimePicker, Button } from '@components/index';

import { addPlayer, removePlayer } from '@redux/gameSlice';
import { ChevronLeftIcon } from '@assets/icons';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import socket from '@utils/ws';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';
import { RootState } from '@redux/store';

type NewGameScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.NEW_GAME>;

interface NewGameProps {}

const NewGame: React.FunctionComponent<NewGameProps> = () => {
  const navigation = useNavigation<NewGameScreenNavigationProp>();
  const { gameId } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    socket.on('joined', (user) => dispatch(addPlayer(user)));
    socket.on('left', (user) => dispatch(removePlayer(user)));
  }, [dispatch]);

  const handleStartGame = () => {
    navigation.replace(screen.COUNTDOWN);
  };

  return (
    <Screen style={styles.container}>
      <TimePicker visible={isVisible} setVisible={setIsVisible} />
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Icon width={20} height={20} icon={ChevronLeftIcon} />
      </TouchableOpacity>
      <Androw
        style={{
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.15,
          shadowRadius: 7,
        }}>
        <View style={styles.qrCodeContainer}>
          <QRCode value={gameId} size={120} />
        </View>
      </Androw>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Vrijeme igre</Text>
        <Button onPress={() => setIsVisible(true)} title="Odaberi" picker />
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
