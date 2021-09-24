import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';

import { fontFamily, fontSize } from '@constants/typography';
import colors from '@constants/colors';

interface BottomButtonProps extends TouchableOpacityProps {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const BottomButton: React.FunctionComponent<BottomButtonProps> = ({ title, style, textStyle, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: colors.white,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    paddingHorizontal: 80,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.barutaBlack,
    textTransform: 'uppercase',
  },
});

export default BottomButton;
