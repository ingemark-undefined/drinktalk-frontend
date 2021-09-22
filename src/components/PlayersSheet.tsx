import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import SheetHandle from './SheetHandle';

import colors from '@constants/colors';

const App = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['33%', '100%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      handleComponent={() => <SheetHandle onPress={() => bottomSheetRef.current?.expand()} />}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Prijavljena ekipa</Text>
        <Text style={{ fontFamily: 'BarutaBlack', fontSize: 20 }}>1. Krešo Orešković</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'BarutaBlack',
    color: colors.primary,
    fontSize: 25,
  },
});

export default App;
