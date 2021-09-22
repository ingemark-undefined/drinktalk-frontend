import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DrinksSvg } from '@assets/svgs';
import colors from '@constants/colors';

interface CardProps {}

const Card: React.FunctionComponent<CardProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <DrinksSvg style={styles.svg} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    paddingTop: 125,
    padding: 50,
    backgroundColor: 'white',
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: colors.black,
    elevation: 15,
    position: 'relative',
  },
  svg: {
    marginBottom: 30,
    top: -120,
    position: 'absolute',
  },
});

export default Card;
