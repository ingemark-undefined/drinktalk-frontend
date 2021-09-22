import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';

import Icon from './Icon';

import { ChevronUpIcon } from '@assets/icons';
import colors from '@constants/colors';

interface SheetHandleProps extends TouchableOpacityProps {}

const SheetHandle: React.FunctionComponent<SheetHandleProps> = ({ ...props }) => {
  return (
    <AnimatePresence>
      <MotiView
        from={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}>
        <TouchableOpacity style={styles.handle} {...props}>
          <Icon icon={ChevronUpIcon} width={20} height={20} />
        </TouchableOpacity>
      </MotiView>
    </AnimatePresence>
  );
};

const styles = StyleSheet.create({
  handle: {
    alignSelf: 'center',
    marginTop: -20,
    backgroundColor: colors.black,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default SheetHandle;
