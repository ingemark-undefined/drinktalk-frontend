import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';

import QRCodeScanner from 'react-native-qrcode-scanner';

import socket from '@utils/ws';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';
import screen from '@navigation/screens';
import { setGameId, setPlayers } from '@redux/gameSlice';

const { height } = Dimensions.get('window');

type ScanScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.SCAN>;

interface ScanProps {}

const Scan: React.FunctionComponent<ScanProps> = () => {
  const navigation = useNavigation<ScanScreenNavigationProp>();
  const dispatch = useDispatch();

  const onScan = ({ data }: { data: string }) => {
    socket.connect();
    socket.emit('game:join', data);
    socket.on('game', (game) => {
      dispatch(setGameId(data));
      dispatch(setPlayers(game.players));
      navigation.replace(screen.NEW_GAME);
    });
  };

  return <QRCodeScanner onRead={onScan} cameraStyle={styles.camera} />;
};

const styles = StyleSheet.create({
  camera: {
    height,
  },
});

export default Scan;
