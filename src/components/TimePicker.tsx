import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ModalContainer from 'react-native-modal';
import Picker from '@gregfrench/react-native-wheel-picker';

import Button from './Button';

import { useAppDispatch } from '@redux/hooks';
import timeFormat from '@utils/timeFormat';
import { setTime } from '@redux/gameSlice';
import colors from '@constants/colors';

interface TimePickerProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimePicker: React.FunctionComponent<TimePickerProps> = ({ visible, setVisible }) => {
  const [selected, setSelected] = useState<number>(90);
  const dispatch = useAppDispatch();

  const [items] = useState([{ minutes: 90 }, { minutes: 60 }, { minutes: 30 }, { minutes: 15 }]);

  const handleDone = () => {
    dispatch(setTime(selected));
    setVisible(false);
  };

  return (
    <ModalContainer
      isVisible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriverForBackdrop={true}
      onBackdropPress={() => setVisible(false)}>
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          lineColor={colors.black}
          lineGradientColorFrom={colors.black}
          lineGradientColorTo={colors.black}
          selectedValue={0}
          itemStyle={styles.item}
          onValueChange={(minutes) => setSelected(minutes)}>
          {items.map(({ minutes }) => (
            <Picker.Item label={timeFormat(minutes)} value={minutes} key={minutes} />
          ))}
        </Picker>
        <View style={styles.buttonContainer}>
          <Button title="Postavi" onPress={handleDone} />
        </View>
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 30,
  },
  picker: {
    width: '100%',
    height: 180,
    marginBottom: 30,
  },
  item: {
    color: colors.black,
    fontSize: 26,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default TimePicker;
