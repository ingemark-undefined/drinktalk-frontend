import React from 'react';
import { TextInput, StyleSheet, ViewStyle, TextInputProps } from 'react-native';

import colors from '@constants/colors';

interface TextFieldProps extends TextInputProps {
  style?: ViewStyle;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ style, ...props }) => {
  return <TextInput style={[styles.textInput, style]} placeholder="Daj nadimak ili ime" {...props} />;
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
