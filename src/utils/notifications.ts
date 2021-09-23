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
