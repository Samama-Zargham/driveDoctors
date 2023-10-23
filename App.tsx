import React, { useEffect, useState } from 'react';
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
const App = () => {
  const [splash, setsplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 2200);
  }, [])
  async function getLanguage() {
    const lang = await getAsyncStorageValue('lang');
    i18next.changeLanguage(lang)
  }
  useEffect(
    React.useCallback(() => {
      getLanguage()
    }, []) // Include any dependencies that should trigger the effect
  );
  return (
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
  );
};

export default App;
