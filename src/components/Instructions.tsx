import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fontFamily, fontSize } from '@constants/typography';
import { useAppSelector } from '@redux/hooks';
import timeFormat from '@utils/timeFormat';

interface InstructionsProps {
  remaining?: number;
}

const Instructions: React.FunctionComponent<InstructionsProps> = ({ remaining }) => {
  const { time, gameId, started } = useAppSelector((state) => state.game);

  const showTime = useMemo(() => {
    if (!started && !gameId) {
      return false;
    }
    return true;
  }, [started, gameId]);

  return (
    <View>
      <Text style={[styles.text, styles.margin]}>
        {showTime ? (
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
    fontFamily: fontFamily.gothamRounded,
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  bold: {
    fontFamily: fontFamily.gothamRoundedBold,
    textAlign: 'center',
  },
  margin: {
    marginBottom: 30,
  },
});

export default Instructions;
