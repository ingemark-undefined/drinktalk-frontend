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
            If you pick up your phone in the next <Text style={styles.bold}>{timeFormat(remaining || time, ' sat', ' min')}</Text>, other
            participants in the game will be notified that you have lost.
          </Text>
        ) : (
          <Text>
            If you pick your phone within the time defined by the host, other participants of the game will be notified that you have lost.
          </Text>
        )}
      </Text>
      <Text style={styles.bold}>Be fair and pay for a drink if you lose.</Text>
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
