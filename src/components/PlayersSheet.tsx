import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import DashedLine from 'react-native-dashed-line';

import SheetHandle from './SheetHandle';
import CloseButton from './CloseButton';

import colors from '@constants/colors';

const dummyData = ['Krešo Orešković', 'Predrag Kežić', 'Mislav Čotić', 'Predrag Kežić2', 'Mislav Čotić2'];

const App = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  const snapPoints = useMemo(() => ['43%', '100%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      backgroundStyle={styles.background}
      snapPoints={snapPoints}
      onChange={(index) => (index ? setExpanded(true) : setExpanded(false))}
      handleComponent={!expanded ? () => <SheetHandle onPress={() => bottomSheetRef.current?.expand()} /> : null}>
      <View style={styles.container}>
        {expanded && <CloseButton style={styles.closeButton} onPress={() => bottomSheetRef.current?.collapse()} />}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Prijavljena ekipa</Text>
          {dummyData.map((name, index) => (
            <View key={name}>
              <Text style={styles.player}>
                {index + 1}. {name}
              </Text>
              {index !== dummyData.length - 1 && (
                <View style={styles.separator}>
                  <DashedLine dashLength={5} dashThickness={0.6} dashGap={5} dashColor={colors.gray} />
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    width: '100%',
  },
  contentContainer: {
    marginLeft: 50,
    marginRight: 60,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginRight: 24,
  },
  title: {
    fontFamily: 'BarutaBlack',
    color: colors.primary,
    fontSize: 25,
    marginBottom: 14,
  },
  player: {
    fontFamily: 'BarutaBlack',
    fontSize: 20,
  },
  separator: {
    marginVertical: 18,
  },
  background: {
    borderRadius: 55,
  },
});

export default App;
