import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ModalContainer from 'react-native-modal';
import Picker from '@gregfrench/react-native-wheel-picker';

import Button from './Button';

import colors from '@constants/colors';

interface TimePickerProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimePicker: React.FunctionComponent<TimePickerProps> = ({ visible, setVisible }) => {
  const [selectedItem, setSelectedItem] = useState(2);
  const [items] = useState([
    { label: '1h 30min', value: 90 },
    { label: '1h', value: 60 },
    { label: '30min', value: 30 },
    { label: '15min', value: 15 },
  ]);

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
          selectedValue={selectedItem}
          itemStyle={styles.item}
          onValueChange={(index) => setSelectedItem(index)}>
          {items.map((item, i) => (
            <Picker.Item label={item.label} value={item.value} key={i} />
          ))}
        </Picker>
        <Button title="Postavi" onPress={() => setVisible(false)} />
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  picker: {
    width: 150,
    height: 180,
    marginBottom: 20,
  },
  item: {
    color: colors.black,
    fontSize: 26,
  },
});

export default TimePicker;
