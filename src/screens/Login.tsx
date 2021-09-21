import React, { useState } from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, View, StyleSheet, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CircleButton, Icon, TextField } from '@components/index';

import { LogoIcon } from '@assets/icons/index';
import screen from '@navigation/screens';

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={-180}>
        <Icon width={169} height={180} icon={LogoIcon} />
        <View style={styles.textField}>
          <TextField placeholder="Daj nadimak ili ime" value={name} onChangeText={(value) => setName(value)} />
        </View>
        <CircleButton title="Prijavi se" size={150} onPress={() => navigation.navigate(screen.HOME, { name })} />
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
