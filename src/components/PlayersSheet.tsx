import React, { useCallback, useMemo, useRef, useState, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import DashedLine from 'react-native-dashed-line';

import SheetHandle from './SheetHandle';
import CloseButton from './CloseButton';

import colors from '@constants/colors';

const dummyData = ['Krešo Orešković', 'Predrag Kežić', 'Mislav Čotić', 'Predrag Kežić', 'Mislav Čotić'];

const App = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  const snapPoints = useMemo(() => ['33%', '100%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={(index) => (index ? setExpanded(true) : setExpanded(false))}
      handleComponent={!expanded ? () => <SheetHandle onPress={() => bottomSheetRef.current?.expand()} /> : null}>
      <View style={styles.container}>
        {expanded && <CloseButton style={styles.closeButton} onPress={() => bottomSheetRef.current?.collapse()} />}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Prijavljena ekipa</Text>
          {dummyData.map((dummy, index) => (
            <Fragment key={dummy}>
              <Text style={styles.player}>
                {index + 1}. {dummy}
              </Text>
              {index !== dummyData.length - 1 && (
                <View style={styles.separator}>
                  <DashedLine dashLength={5} dashThickness={1} />
                </View>
              )}
            </Fragment>
          ))}
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default App;
