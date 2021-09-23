import React from 'react';
import { StyleSheet } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

interface ScanProps {}

const Scan: React.FunctionComponent<ScanProps> = () => {
  const onScan = ({ data }) => {
    console.log(data);
  };

  return <QRCodeScanner onRead={onScan} />;
};

const styles = StyleSheet.create({});

export default Scan;
