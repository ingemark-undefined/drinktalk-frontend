import React, { useState } from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, View, StyleSheet, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { CircleButton, Icon, TextField } from '@components/index';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigatorParamList } from '@navigation/Navigator';
import { LogoIcon } from '@assets/icons/index';
import { setUser } from '@redux/gameSlice';
import screen from '@navigation/screens';

type LoginScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.LOGIN>;

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert('Molimo popuni svoj nadimak/ime!');
    }

    dispatch(setUser(name));
    navigation.navigate(screen.HOME);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container} keyboardVerticalOffset={-180}>
        <Icon width={169} height={180} icon={LogoIcon} />
        <View style={styles.textField}>
          <TextField placeholder="Daj nadimak ili ime" value={name} onChangeText={(value) => setName(value)} />
        </View>
        <CircleButton title="Prijavi se" size={150} onPress={handleSubmit} />
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
