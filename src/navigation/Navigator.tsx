import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';

import { Login, Home, Loser, Success } from '@screens/index';

import screen from '@navigation/screens';
import colors from '@constants/colors';

export type NavigatorParamList = {
  Login: undefined;
  Home: { name: string };
  Loser: undefined;
  Success: undefined;
};

export interface NavigatorProps {}

const Stack = createStackNavigator<NavigatorParamList>();

const Navigator: React.FunctionComponent<NavigatorProps> = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: styles.cardStyle }}>
        <Stack.Screen name={screen.LOSER} component={Loser} />
        <Stack.Screen name={screen.SUCCESS} component={Success} />
        <Stack.Screen name={screen.LOGIN} component={Login} />
        <Stack.Screen name={screen.HOME} component={Home} />
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
