import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CircleButton, Icon, TextField } from '@components/index';

import { LogoIcon } from '@assets/icons';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <SafeAreaView>
      <Text></Text>
      <Icon width={100} height={100} icon={LogoIcon} />
      <TextField />
      <CircleButton size={150} onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Home;
