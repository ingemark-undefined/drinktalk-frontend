import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';

import colors from '@constants/colors';
import { fontSize } from '@constants/typography';

interface CircleButtonProps {
  size?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: (event: GestureResponderEvent) => void;
}

const CircleButton: React.FunctionComponent<CircleButtonProps> = ({ size = 80, style, textStyle, onPress }) => {
  const buttonStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <TouchableOpacity style={[styles.container, buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>PRIJAVI SE</Text>
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
  },
});

export default CircleButton;
