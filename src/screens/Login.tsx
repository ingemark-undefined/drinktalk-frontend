import React, { useState } from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, View, StyleSheet, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CircleButton, Icon, TextField } from '@components/index';

import { LogoIcon } from '@assets/icons/index';
import screen from '@navigation/screens';
import { NavigatorParamList } from '@navigation/Navigator';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<NavigatorParamList, screen.LOGIN>;

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [name, setName] = useState<string>('');

  const handleSubmit = () => {
    if (!name) {
      Alert.alert('Molimo popuni svoj nadimak/ime!');
      return;
    }

    navigation.navigate(screen.HOME, { name });
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
