import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { MotiView } from 'moti';

import { SheetHandle, CloseButton, Player, Separator } from './index';

import { useAppSelector } from '@redux/hooks';
import { fontFamily } from '@constants/typography';
import colors from '@constants/colors';

const PlayersSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const { players } = useAppSelector((state) => state.game);

  const snapPoints = useMemo(() => {
    // We are showing max 3 players when first snap point is active
    if (players.length > 3) {
      return [180 + 3 * 50, '100%'];
    }

    // If less or equal than 3 players, expand the sheet as needed
    return [180 + players.length * 50, '100%'];
  }, [players]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      backgroundStyle={styles.background}
      snapPoints={snapPoints}
      onChange={(index) => (index ? setExpanded(true) : setExpanded(false))}
      handleComponent={!expanded ? () => <SheetHandle onPress={() => bottomSheetRef.current?.expand()} /> : null}>
      <View style={[styles.container]}>
        {expanded && <CloseButton style={styles.closeButton} onPress={() => bottomSheetRef.current?.collapse()} />}
        <View style={styles.contentContainer}>
          <MotiView
            from={{
              transform: [{ translateY: expanded ? 0 : 20 }],
            }}
            animate={{
              transform: [{ translateY: expanded ? 20 : 0 }],
            }}
            transition={{ type: 'spring', damping: 20 }}>
            <Text style={styles.title}>Registered team</Text>
            <FlatList data={players} renderItem={Player} keyExtractor={(item) => item} ItemSeparatorComponent={Separator} />
          </MotiView>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    marginTop: 20,
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
    fontFamily: fontFamily.barutaBlack,
    color: colors.primary,
    fontSize: 25,
    marginBottom: 14,
  },
  player: {
    fontFamily: fontFamily.barutaBlack,
    fontSize: 20,
  },
  separator: {
    marginVertical: 18,
  },
  background: {
    borderRadius: 55,
  },
});

export default PlayersSheet;
