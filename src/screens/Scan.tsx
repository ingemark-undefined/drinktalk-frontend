import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

import socket from '@utils/ws';

const { height } = Dimensions.get('window');

interface ScanProps {}

const Scan: React.FunctionComponent<ScanProps> = () => {
  const onScan = ({ data }: { data: string }) => {
    socket.connect();
    socket.emit('game:join', data);
  };

  return <QRCodeScanner onRead={onScan} cameraStyle={styles.camera} />;
};

const styles = StyleSheet.create({
  camera: {
    height,
  },
});

export default Scan;
