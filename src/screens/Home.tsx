import React, { useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import BackgroundService from 'react-native-background-actions';

import { BottomButton, CircleButton, Icon, Screen } from '@components/index';

import { LogoIcon, ChevronLeftIcon } from '@assets/icons';
import { NavigatorParamList } from '@navigation/Navigator';
import { fontSize } from '@constants/typography';
import colors from '@constants/colors';
import screen from '@navigation/screens';
import { StackNavigationProp } from '@react-navigation/stack';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

type HomeScreenRouteProp = RouteProp<NavigatorParamList, screen.HOME>;
type HomeScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.HOME>;

interface HomeProps {
  route: HomeScreenRouteProp;
}

const veryIntensiveTask = async (taskDataArguments) => {
  // Example of an infinite loop task
  await new Promise(async (resolve) => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);
    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) => console.log({ x, y, z, timestamp }));
  });
};

const options = {
  taskName: 'Example',
  taskTitle: 'ExampleTask title',
  taskDesc: 'ExampleTask description',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
  parameters: {
    delay: 1000,
  },
};

const Home: React.FunctionComponent<HomeProps> = ({ route }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { name } = route.params;

  useEffect(() => {
    const zapocni = async () => {
      try {
        await BackgroundService.start(veryIntensiveTask, options);
      } catch (err) {
        console.log('error', err);
      }
    };
    zapocni();
  }, []);

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
