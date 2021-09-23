import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, View, StyleSheet } from 'react-native';

import Icon from './Icon';

import { ChevronDownIcon } from '@assets/icons';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  picker?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ title, picker, ...props }) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        {picker && <Icon icon={ChevronDownIcon} style={styles.icon} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 30,
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'BarutaBlack',
    color: colors.white,
    fontSize: fontSize.mediumLarge,
  },
  icon: {
    marginLeft: 10,
  },
});

export default Button;
