import React from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, View, StyleSheet, Keyboard } from 'react-native';

import { CircleButton, Icon, TextField } from '@components/index';

import { LogoIcon } from '@assets/icons/index';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={-180}>
        <Icon width={169} height={180} icon={LogoIcon} />
        <View style={styles.textField}>
          <TextField />
        </View>
        <CircleButton title="Prijavi se" size={150} onPress={() => {}} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textField: {
    marginVertical: 38,
    paddingHorizontal: 32,
    width: '100%',
  },
});

export default Login;
