import PushNotification from 'react-native-push-notification';
import BackgroundService from 'react-native-background-actions';
import { accelerometer, SensorData, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors';
import dayjs from 'dayjs';

import { sendLoserNotification } from './notifications';
import { storage } from '@hooks/useStorage';
import socket from '@utils/ws';

const veryIntensiveTask = async () => {
  let prev: SensorData;

  await new Promise(async () => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 100);

    // Subscribe to accelerometer readings
    const subscription = accelerometer.subscribe(async ({ x, y, z, timestamp }) => {
      // Check if game has ended
      const endsAt = storage.getString('endsAt');
      if (dayjs().isAfter(dayjs(endsAt))) {
        subscription.unsubscribe();
        await BackgroundService.stop();
      }

      // Check if phone has been picked up
      if (prev) {
        if (Math.abs(x - prev.x) > 5 || Math.abs(y - prev.y) > 5 || Math.abs(z - prev.z) > 1.5) {
          // Disconnect from the game
          socket.close();

          // Cancel scheduled success message
          PushNotification.cancelAllLocalNotifications();

          // Send notification
          sendLoserNotification({ title: 'LOOOOSER ARE YOU', message: "You picked your phone up so you're paying for this round!" });

          // Show loser screen
          storage.setString('loser', socket.auth.user);

          // Unsubscribe from the accelerometer and stop the task
          subscription.unsubscribe();
          await BackgroundService.stop();
        }
      }
      prev = { x, y, z, timestamp };
    });

    // Listen for when someone loses
    socket.on('left', async (user: string) => {
      // Check if game is on
      const endsAt = storage.getString('endsAt');
      if (dayjs().isAfter(dayjs(endsAt))) {
        return;
      }

      // Send loser notification
      sendLoserNotification({ title: `LOOOOSER IS ${user.toUpperCase()}`, message: "They don't listen to the team and pay this round." });

      // Show loser screen
      storage.setString('loser', user);

      // Unsubscribe from the accelerometer and stop the task
      subscription.unsubscribe();
      await BackgroundService.stop();
    });
  });
};

const options = {
  taskName: 'GameInProgress',
  taskTitle: 'Game started',
  taskDesc: "To win, don't pick up your phone",
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
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
