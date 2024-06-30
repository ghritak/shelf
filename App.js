import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/components/stacks/Route';
import * as Notifications from 'expo-notifications';
import {
  registerForPushNotificationsAsync,
  schedulePushNotification,
} from './src/utils/notification';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();
  const navigationRef = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const { screen } = response.notification.request.content.data;
        if (screen) {
          navigationRef.current?.navigate('Guide', { screen });
        }
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      schedulePushNotification();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar style='dark' />
      <Route />
    </NavigationContainer>
  );
}
