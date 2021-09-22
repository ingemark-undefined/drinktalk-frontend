import colors from '@constants/colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import DashedLine from 'react-native-dashed-line';

interface SeparatorProps {}

const Separator: React.FunctionComponent<SeparatorProps> = () => {
  return <DashedLine dashLength={5} dashThickness={0.6} dashGap={5} dashColor={colors.gray} style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    marginVertical: 18,
  },
});

export default Separator;
