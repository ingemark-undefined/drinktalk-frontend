import React from 'react';
import { StyleSheet, Dimensions, Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import QRCodeScanner from 'react-native-qrcode-scanner';

import BackButton from '@components/BackButton';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';
import { CameraMaskSvg } from '@assets/svgs';
import screen from '@navigation/screens';
import socket from '@utils/ws';

const { height } = Dimensions.get('window');

type ScanScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.SCAN>;

interface ScanProps {}

const Scan: React.FunctionComponent<ScanProps> = () => {
  const navigation = useNavigation<ScanScreenNavigationProp>();

  const onScan = ({ data }: { data: string }) => {
    socket.connect();
    socket.emit('game:join', data);

    socket.on('exception', (exception: string) => {
      if (exception === 'GameDoesNotExist') {
        Alert.alert('Kod koji si skenirao nije ispravan!');
      }
    });

    socket.on('game', () => {
      navigation.replace(screen.COUNTDOWN);
    });
  };

  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} />
      <View style={styles.maskContainer}>
        <CameraMaskSvg />
      </View>
      <QRCodeScanner onRead={onScan} cameraStyle={styles.camera} />
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    height,
  },
  maskContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  backButton: {
    zIndex: 1,
  },
  container: {
    position: 'relative',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});

export default Scan;
