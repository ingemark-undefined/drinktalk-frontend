import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

import { CircleButton, Icon, Screen } from '@components/index';

import { LogoIcon, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon } from '@assets/icons';
import colors from '@constants/colors';
import { fontSize } from '@constants/typography';
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
      <Icon width={140} height={140} icon={LogoIcon} style={styles.logoIcon} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.white]}>Hellou</Text>
      </View>

      <Text>Vrijeme igre</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{ width: '60%', backgroundColor: colors.black, borderRadius: 30, alignSelf: 'center' }}
        dropDownContainerStyle={{
          alignSelf: 'center',
          width: '60%',
          backgroundColor: colors.black,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingBottom: 10,
        }}
        textStyle={{ fontFamily: 'BarutaBlack', color: colors.white, backgroundColor: colors.black }}
        ArrowUpIconComponent={() => <Icon icon={ChevronUpIcon} />}
        ArrowDownIconComponent={() => <Icon icon={ChevronDownIcon} />}
        props={{ activeOpacity: 1 }}
      />

      <CircleButton
        size={150}
        title="Kreiraj igru"
        onPress={() => {}}
        style={styles.createButton}
        textStyle={{ fontSize: fontSize.mediumLarge }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
  logoIcon: {
    marginTop: 70,
  },
  textContainer: {
    marginTop: 62,
    marginBottom: 56,
  },
  text: {
    fontFamily: 'BarutaBlack',
    fontSize: fontSize.extraLarge,
    textAlign: 'center',
  },
  white: {
    color: colors.white,
  },
  createButton: {
    marginBottom: 150,
  },
  joinButton: {
    position: 'absolute',
    backgroundColor: colors.white,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    paddingHorizontal: 80,
    paddingTop: 48,
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinText: {
    fontSize: fontSize.medium,
    fontFamily: 'BarutaBlack',
    textTransform: 'uppercase',
  },
});

export default NewGame;
