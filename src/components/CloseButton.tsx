import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, ViewStyle } from 'react-native';

import Icon from './Icon';

import { CloseIcon } from '@assets/icons/index';
import colors from '@constants/colors';

interface CloseButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({ style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Icon width={20} height={20} icon={CloseIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default CloseButton;
