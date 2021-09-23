import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fontSize } from '@constants/typography';

interface InstructionsProps {}

const Instructions: React.FunctionComponent<InstructionsProps> = () => {
  return (
    <View>
      <Text style={[styles.text, styles.margin]}>
        Ukoliko podigneš mobitel u sljedećih <Text style={styles.bold}>1 sat 30 min</Text> ostalim sudionicima igre doći će notifikacija da
        si izgubio.
      </Text>
      <Text style={styles.bold}>Budi fer i plati piće ako izgubiš.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'GothamRounded',
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  bold: {
    fontFamily: 'GothamRoundedBold',
    textAlign: 'center',
  },
  margin: {
    marginBottom: 30,
  },
});

export default Instructions;
