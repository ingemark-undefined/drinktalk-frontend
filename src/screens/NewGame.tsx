import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

import { BottomButton, Icon, PlayersSheet, Screen } from '@components/index';

import { ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon } from '@assets/icons';
import colors from '@constants/colors';
import { NavigatorParamList } from '@navigation/Navigator';
import screen from '@navigation/screens';
import { StackNavigationProp } from '@react-navigation/stack';

type NewGameScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.NEW_GAME>;

interface NewGameProps {}

const NewGame: React.FunctionComponent<NewGameProps> = () => {
  const navigation = useNavigation<NewGameScreenNavigationProp>();

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '1h 30min', value: '90' },
    { label: '1h', value: '60' },
    { label: '30min', value: '30' },
    { label: '15min', value: '15' },
  ]);

  return (
    <Screen style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Icon width={20} height={20} icon={ChevronLeftIcon} />
      </TouchableOpacity>
      <View style={styles.qrCodeContainer} />
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Vrijeme igre</Text>
        <View style={styles.dropdownContView}>
          <DropDownPicker
            open={open}
            value={value}
            placeholder="Odaberi"
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            ArrowUpIconComponent={() => <Icon icon={ChevronUpIcon} />}
            ArrowDownIconComponent={() => <Icon icon={ChevronDownIcon} />}
            props={{ activeOpacity: 1 }}
            zIndex={open ? 1 : 0}
          />
        </View>
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
    width: 140,
    height: 140,
    borderRadius: 24,
    marginBottom: 40,
    marginTop: 130,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontFamily: 'BarutaBlack',
    fontSize: 18,
    marginRight: 28,
  },
  time: {
    fontFamily: 'BarutaBlack',
    fontSize: 18,
    marginRight: 28,
  },
  dropdownContView: {
    width: '35%',
  },
  dropdown: {
    backgroundColor: colors.black,
    borderRadius: 30,
    alignSelf: 'center',
  },
  dropdownContainer: {
    alignSelf: 'center',
    backgroundColor: colors.black,
    borderRadius: 30,
    paddingBottom: 10,
  },
  dropdownText: {
    fontFamily: 'BarutaBlack',
    color: colors.white,
    backgroundColor: colors.black,
  },
});

export default NewGame;
