import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Icon from './Icon';

import { ChevronLeftIcon } from '@assets/icons';
import { useNavigation } from '@react-navigation/core';
import colors from '@constants/colors';

interface BackButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
}

const BackButton: React.FunctionComponent<BackButtonProps> = ({ onPress, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress || navigation.goBack} style={[styles.backButton, style]}>
      <Icon width={20} height={20} icon={ChevronLeftIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 24,
    position: 'absolute',
    top: 50,
    left: 38,
  },
});

export default BackButton;
