import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BottomButton, Icon, PlayersSheet, Screen, TimePicker, Button } from '@components/index';

import { ChevronLeftIcon } from '@assets/icons';
import colors from '@constants/colors';
import { NavigatorParamList } from '@navigation/Navigator';
import screen from '@navigation/screens';
import { StackNavigationProp } from '@react-navigation/stack';

type NewGameScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.NEW_GAME>;

interface NewGameProps {}

const NewGame: React.FunctionComponent<NewGameProps> = () => {
  const navigation = useNavigation<NewGameScreenNavigationProp>();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Screen style={styles.container}>
      <TimePicker visible={isVisible} setVisible={setIsVisible} />
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Icon width={20} height={20} icon={ChevronLeftIcon} />
      </TouchableOpacity>
      <View style={styles.qrCodeContainer} />

      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Vrijeme igre</Text>
        <Button onPress={() => setIsVisible(true)} title="Odaberi" picker />
      </View>
      <PlayersSheet />
      <BottomButton
        title="Kreni s igrom"
        onPress={() => {}}
        style={{ backgroundColor: colors.black }}
        textStyle={{ color: colors.white }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 24,
    position: 'absolute',
    top: 50,
    left: 38,
  },
  qrCodeContainer: {
    backgroundColor: colors.white,
    width: 170,
    height: 170,
    borderRadius: 24,
    marginBottom: 40,
    marginTop: 130,
  },
  timeContainer: {
    alignItems: 'center',
  },

  timeText: {
    fontFamily: 'BarutaBlack',
    fontSize: 18,
    marginBottom: 10,
  },
  time: {
    fontFamily: 'BarutaBlack',
    fontSize: 18,
    marginRight: 28,
  },
});

export default NewGame;
