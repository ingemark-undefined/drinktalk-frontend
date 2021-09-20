import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Screen, CircleButton, Icon, TextField } from '@components/index';

import { LogoIcon } from '@assets/icons/index';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <Screen style={styles.container}>
      <Icon width={169} height={180} icon={LogoIcon} />
      <View style={styles.textField}>
        <TextField />
      </View>

      <CircleButton title="Prijavi se" size={150} onPress={() => {}} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginVertical: 38,
    paddingHorizontal: 32,
    width: '100%',
  },
});

export default Login;
