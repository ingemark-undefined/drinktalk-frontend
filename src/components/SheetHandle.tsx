import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

import Icon from './Icon';

import { ChevronUpIcon } from '@assets/icons';
import colors from '@constants/colors';

interface SheetHandleProps extends TouchableOpacityProps {}

const SheetHandle: React.FunctionComponent<SheetHandleProps> = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.handle} {...props}>
      <Icon icon={ChevronUpIcon} width={20} height={20} />
    </TouchableOpacity>
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
