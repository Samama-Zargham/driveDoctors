import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import MainStack from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import navServices from './src/others/utils/navServices';
import Splash from './src/screens/auth/Splash';
import store, { persistor } from "./src/others/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CustomSnackBar from './src/components/Snakbar/SnackBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getAsyncStorageValue } from './src/others/utils/helpers';
import i18next from 'i18next';
import { setFcmToken } from './src/others/redux/reducers/userReducer';
import notifee from '@notifee/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  const [splash, setsplash] = useState(true)

  const [visible, setVisible] = useState(false);
  const [nofification, setnofification] = useState(false);
  const [initialRoute, setInitialRoute] = React.useState(null)
  const [notificationMsg, setNotificationMsg] = React.useState("")
  const [initialLoading, setInitialLoading] = React.useState(true)

  const handleMessaging = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }



  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (message: any) => {
      console.log("Message Receiveded", message);
      setnofification(message)
      // Request permissions (required for iOS)
      await notifee.requestPermission()
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
      console.log("channelId :: ", channelId)
      notifee.displayNotification({
        title: message.notification.title,
        body: message.notification.body,
        android: {
          channelId,
          // pressAction: {
          //   id: 'default',
          // },
        },
        ios: {
          categoryId: 'post',

        },
      });
      setTimeout(() => {
        setVisible(true)
      }, 100);
    });

    return unsubscribe;
  }, []);



  useEffect(() => {

    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'onNotificationOpenedApp to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage,
          );
        }
        setInitialLoading(false);
      });
  }, []);






  useEffect(() => {
    const registerForRemoteNotifications = async () => {
      const token = await messaging().getToken();
      if (token) {
        console.log('FCM Token:', token);
        store.dispatch(setFcmToken(token))
      }
    };
    handleMessaging();
    registerForRemoteNotifications();
    // Register for remote notifications

  }, []);

  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 2200);
  }, [])
  async function getLanguage() {
    const lang = await getAsyncStorageValue('lang');
    console.log({ lang })
    i18next.changeLanguage(lang)
  }
  useEffect(
    React.useCallback(() => {
      getLanguage()
    }, []) // Include any dependencies that should trigger the effect
  );
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <CustomSnackBar />
          <PersistGate persistor={persistor}>
            <NavigationContainer ref={navServices.setTopLevelNavigator}>
              {splash ? <Splash /> : <MainStack />}
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;