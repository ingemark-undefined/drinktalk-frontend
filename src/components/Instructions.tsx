import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAppSelector } from '@redux/hooks';
import { fontSize } from '@constants/typography';
import timeFormat from '@utils/timeFormat';

interface InstructionsProps {
  remaining?: number;
}

const Instructions: React.FunctionComponent<InstructionsProps> = ({ remaining }) => {
  const { time } = useAppSelector((state) => state.game);

  return (
    <View>
      <Text style={[styles.text, styles.margin]}>
        {time ? (
          <Text>
            Ukoliko podigneš mobitel u sljedećih <Text style={styles.bold}>{timeFormat(remaining || time, ' sat', ' min')}</Text> ostalim
            sudionicima igre doći će notifikacija da si izgubio.
          </Text>
        ) : (
          <Text>
            Ukoliko podigneš mobitel unutar vremena koje je definirao voditelj, ostalim sudionicima igre doći će notifikacija da si izgubio.
          </Text>
        )}
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
