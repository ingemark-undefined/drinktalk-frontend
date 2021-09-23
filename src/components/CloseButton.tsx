import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, ViewStyle } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';

import Icon from './Icon';

import { CloseIcon } from '@assets/icons/index';
import colors from '@constants/colors';

interface CloseButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
}

const CloseButton: React.FunctionComponent<CloseButtonProps> = ({ style, ...props }) => {
  return (
    <AnimatePresence>
      <MotiView
        from={{
          opacity: 0,
          scale: 1,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 1,
        }}>
        <TouchableOpacity style={[styles.button, style]} {...props}>
          <Icon width={25} height={25} icon={CloseIcon} />
        </TouchableOpacity>
      </MotiView>
    </AnimatePresence>
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
