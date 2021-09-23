import BackgroundService from 'react-native-background-actions';
import { accelerometer, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors';

import socket from '@utils/ws';
import { sendLoserNotification } from './notifications';

const veryIntensiveTask = async (_) => {
  let prev: any;

  await new Promise(async () => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);

    // socket.on('joined', (user) => {
    //   console.log(user);
    // });

    const subscription = accelerometer.subscribe(async ({ x, y, z }) => {
      if (prev) {
        if (Math.abs(x - prev.x) > 5 || Math.abs(y - prev.y) > 5 || Math.abs(z - prev.z) > 1.5) {
          sendLoserNotification();
          subscription.unsubscribe();
          await BackgroundService.stop();
        }
      }

      prev = { x, y, z };
    });
  });
};

const options = {
  taskName: 'Example',
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
