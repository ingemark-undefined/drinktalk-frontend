import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fontFamily } from '@constants/typography';

interface PlayerProps {
  index: number;
  item: string;
}

const Player: React.FunctionComponent<PlayerProps> = ({ item, index }) => {
  return (
    <View key={item}>
      <Text style={styles.text}>
        {index + 1}. {item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.barutaBlack,
    fontSize: 18,
  },
  line: {
    marginVertical: 18,
  },
});

export default Player;
