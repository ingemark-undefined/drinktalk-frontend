import React, { useState } from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, View, StyleSheet, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { CircleButton, Icon, TextField } from '@components/index';

import { LogoIcon } from '@assets/icons/index';
import { setUser } from '@redux/gameSlice';
import socket from '@utils/ws';
import screen from '@navigation/screens';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';

type LoginScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.LOGIN>;

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert('Please fill in your nickname/name!');
    }

    dispatch(setUser(name));
    socket.auth = { user: name };
    navigation.navigate(screen.HOME);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={-180}>
        <Icon width={169} height={180} icon={LogoIcon} />
        <View style={styles.textField}>
          <TextField placeholder="Give a nickname or name" value={name} onChangeText={(value) => setName(value)} />
        </View>
        <CircleButton title="Sign in" size={150} onPress={handleSubmit} />
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
