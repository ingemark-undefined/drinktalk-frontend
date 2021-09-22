import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { fontSize } from '@constants/typography';
import colors from '@constants/colors';

interface BottomButtonProps extends TouchableOpacityProps {
  title: string;
}

const BottomButton: React.FunctionComponent<BottomButtonProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
