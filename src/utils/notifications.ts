import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: async function (notification: any) {
    console.log('Notification', notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

PushNotification.createChannel(
  {
    channelId: 'drinktalk',
    channelName: 'DrinkTalk',
    soundName: 'default',
    vibrate: true,
  },
  (created: boolean) => console.log(`createChannel returned '${created}'`),
);

export const sendLoserNotification = ({ title, message }: { title: string; message: string }) => {
  PushNotification.localNotification({
    channelId: 'drinktalk',
    autoCancel: true,
    vibrate: true,
    ongoing: false,
    invokeApp: true,
    title: title,
    message: message,
  });
};

export const scheduleWinNotification = (time: number) => {
  PushNotification.localNotificationSchedule({
    date: new Date(Date.now() + time * 60 * 1000),
    channelId: 'drinktalk',
    autoCancel: true,
    vibrate: true,
    ongoing: false,
    invokeApp: true,
    title: 'Bravo!',
    message: 'You are the right team which can forget technology for a moment',
  });
};
