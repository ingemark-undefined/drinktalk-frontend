import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import { BottomButton, CircleButton, Icon, Screen } from '@components/index';

import { LogoIcon, ChevronLeftIcon } from '@assets/icons';
import { NavigatorParamList } from '@navigation/Navigator';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';

type HomeScreenRouteProp = RouteProp<NavigatorParamList, screen.HOME>;

interface HomeProps {
  route: HomeScreenRouteProp;
}

const Home: React.FunctionComponent<HomeProps> = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;

  return (
    <Screen style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Icon width={20} height={20} icon={ChevronLeftIcon} />
      </TouchableOpacity>
      <Icon width={140} height={140} icon={LogoIcon} style={styles.logoIcon} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.white]}>Hellou</Text>
        <Text style={styles.text}>{name}</Text>
      </View>

      <CircleButton
        size={150}
        title="Kreiraj igru"
        onPress={() => {}}
        style={styles.createButton}
        textStyle={{ fontSize: fontSize.mediumLarge }}
      />

      <BottomButton title="Prijavi se u postojeću igru" />
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
});

export default Home;
