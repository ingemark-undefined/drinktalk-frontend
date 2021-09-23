import PushNotification from 'react-native-push-notification';
import BackgroundService from 'react-native-background-actions';
import { accelerometer, SensorData, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors';

import { sendLoserNotification } from './notifications';
import { storage } from '@hooks/useStorage';
import socket from '@utils/ws';

const veryIntensiveTask = async () => {
  let prev: SensorData;

  await new Promise(async () => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);

    // Listen for when someone loses
    socket.on('left', (user: string) => {
      sendLoserNotification({ title: `LUUUZER JE ${user.toUpperCase()}`, message: 'Ne sluša ekipu i plaća ovu rundu.' });
      storage.setString('loser', user);
    });

    const subscription = accelerometer.subscribe(async ({ x, y, z, timestamp }) => {
      if (prev) {
        if (Math.abs(x - prev.x) > 5 || Math.abs(y - prev.y) > 5 || Math.abs(z - prev.z) > 1.5) {
          // Disconnect from the game
          socket.close();

          PushNotification.cancelAllLocalNotifications();

          // Send notification
          sendLoserNotification({ title: 'LUUUZER SI TI', message: 'Mobitel se pomaknuo pa plaćaš rundu!' });

          // Unsubscribe from the accelerometer and stop the task
          subscription.unsubscribe();
          await BackgroundService.stop();
        }
      }
      prev = { x, y, z, timestamp };
    });
  });
};

const options = {
  taskName: 'GameInProgress',
  taskTitle: 'Igra započeta',
  taskDesc: 'Ne pomiči mobitel kako bi pobijedio/la',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  parameters: {
    delay: 1000,
  },
};

export const startBackgroundTask = async () => {
  try {
    await BackgroundService.start(veryIntensiveTask, options);
  } catch (err) {
    console.log('error', err);
  }
};
