import React, { useEffect, useState } from 'react';
import MainStack from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import navServices from './src/others/utils/navServices';
import Splash from './src/screens/auth/Splash';
import store, { persistor } from "./src/others/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
  const [splash, setsplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 2200);
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navServices.setTopLevelNavigator}>
          {splash ? <Splash /> : <MainStack />}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
