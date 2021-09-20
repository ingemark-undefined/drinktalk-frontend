import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import color from '@constants/colors';

export interface ScreenProps {
  style?: ViewStyle;
}

const Screen: React.FunctionComponent<ScreenProps> = ({ style, children }) => {
  return <SafeAreaView style={[style, styles.screen]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
