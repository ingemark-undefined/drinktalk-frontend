import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';

import colors from '@constants/colors';
import { fontSize } from '@constants/typography';

interface CircleButtonProps {
  size?: number;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

const CircleButton: React.FunctionComponent<CircleButtonProps> = ({ size = 80, title, onPress, style, textStyle, loading }) => {
  const buttonStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <TouchableOpacity style={[styles.container, buttonStyle, style]} onPress={onPress}>
      {loading ? <ActivityIndicator color={colors.white} size="large" /> : <Text style={[styles.text, textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
    fontFamily: 'BarutaBlack',
    fontSize: fontSize.large,
    textTransform: 'uppercase',
  },
});

export default CircleButton;
