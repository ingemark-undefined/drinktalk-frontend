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

export const sendLoserNotification = () => {
  PushNotification.localNotification({
    channelId: 'drinktalk',
    autoCancel: true, // (optional) default: true
    vibrate: true,
    ongoing: false, // (optional) set whether this is an "ongoing" notification
    invokeApp: true,
    title: 'LUUUZER SI TI',
    message: 'Mobitel se pomaknuo pa plaćaš rundu!',
  });
};
