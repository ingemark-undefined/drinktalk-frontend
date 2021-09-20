import React from 'react';
import { TextInput, StyleSheet, ViewStyle } from 'react-native';

import colors from '@constants/colors';

interface TextFieldProps {
  style?: ViewStyle;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({ style }) => {
  return <TextInput style={[styles.textInput, style]} placeholder="Daj nadimak ili ime" />;
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
