import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import colors from '@constants/colors';
import { fontSize } from '@constants/typography';

interface BottomButtonProps extends TouchableOpacityProps {
  title: string;
}

const BottomButton: React.FunctionComponent<BottomButtonProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
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
    paddingTop: 48,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSize.medium,
    fontFamily: 'BarutaBlack',
    textTransform: 'uppercase',
  },
});

export default BottomButton;
