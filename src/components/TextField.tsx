import React from 'react';
import { TextInput, StyleSheet, ViewStyle, TextInputProps } from 'react-native';

import colors from '@constants/colors';

interface TextFieldProps extends TextInputProps {
  placeholder: string;
  style?: ViewStyle;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ style, placeholder, ...props }) => {
  return <TextInput style={[styles.textInput, style]} placeholder={placeholder} {...props} />;
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 31,
    paddingVertical: 17,
    borderRadius: 30,
    fontFamily: 'GothamRounded',
  },
});

export default TextField;
