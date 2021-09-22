import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import { CircleButton, Icon, Screen, BottomButton } from '@components/index';

import { LogoIcon, ChevronLeftIcon } from '@assets/icons';
import colors from '@constants/colors';
import { fontSize } from '@constants/typography';
import { NavigatorParamList } from '@navigation/Navigator';
import screen from '@navigation/screens';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenRouteProp = RouteProp<NavigatorParamList, screen.HOME>;
type HomeScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.HOME>;

interface HomeProps {
  route: HomeScreenRouteProp;
}

const Home: React.FunctionComponent<HomeProps> = ({ route }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
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
        onPress={() => navigation.navigate(screen.NEW_GAME)}
        style={styles.createButton}
        textStyle={{ fontSize: fontSize.mediumLarge }}
      />
      <BottomButton title="Prijavi se u postojeću igru" onPress={() => {}} />
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
