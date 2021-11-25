import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Home, Game, Countdown, Loser, Success, NewGame, Scan } from '@screens/index';

import screen from '@navigation/screens';
import colors from '@constants/colors';

export type NavigatorParamList = {
  Login: undefined;
  Home: undefined;
  Game: undefined;
  Countdown: undefined;
  Loser: undefined;
  Success: undefined;
  NewGame: undefined;
  Scan: undefined;
};

export interface NavigatorProps {}

const Stack = createStackNavigator<NavigatorParamList>();

const Navigator: React.FunctionComponent<NavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: styles.cardStyle }}>
        <Stack.Screen name={screen.LOGIN} component={Login} />
        <Stack.Screen name={screen.HOME} component={Home} />
        <Stack.Screen name={screen.COUNTDOWN} component={Countdown} />
        <Stack.Screen name={screen.GAME} component={Game} />
        <Stack.Screen name={screen.LOSER} component={Loser} />
        <Stack.Screen name={screen.SUCCESS} component={Success} />
        <Stack.Screen name={screen.NEW_GAME} component={NewGame} />
        <Stack.Screen name={screen.SCAN} component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: colors.primary,
  },
});

export default Navigator;
